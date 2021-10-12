import { Vector2d } from "konva/lib/types";
import * as React from "react";
import { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item";
import FileUploader from "./FileUploader";

export interface ContextMenuItem {
  label: string;
  action?: () => void;
  fileLoadedAction?: (fileContents: string) => void;
  children?: ContextMenuItem[];
  fileUploader?: boolean;
}

interface IProps {
  position?: Vector2d;
  anchorEl?: HTMLElement;
  items: ContextMenuItem[];
  contextItemClicked?: (item: ContextMenuItem) => void;
  hideContextMenu: () => void;
}

interface IState {
  menuOpen: boolean;
}

const isTargetFileInput = (target: EventTarget) => {
  const targetAsInput = target as HTMLInputElement;
  return !!targetAsInput?.files;
};

class ContextMenu extends Component<IProps, IState> {
  private nestedRef: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      menuOpen: true,
    };
  }

  render() {
    return (
      <div
        id="context-menu-layer"
        onContextMenu={this.preventDefault}
        onClick={(event) => {
          if (!isTargetFileInput(event.target)) {
            this.props.hideContextMenu();
          }
        }}
      >
        <Menu
          keepMounted
          open={this.state.menuOpen}
          onClose={this.handleMenuClosed}
          anchorReference={
            !!this.props.anchorEl ? "anchorEl" : "anchorPosition"
          }
          anchorEl={this.props.anchorEl}
          anchorPosition={
            !!this.props.position
              ? {
                  top: this.props.position.y + 8,
                  left: this.props.position.x + 8,
                }
              : undefined
          }
        >
          {this.props.items.map((i, index) => this.renderMenuItem(i, index))}
        </Menu>
      </div>
    );
  }

  private renderMenuItem = (i: ContextMenuItem, index: number) => {
    if (!!i.children) {
      return (
        <NestedMenuItem
          ref={(val) => {
            this.nestedRef = val;
          }}
          key={`contextMenu-item-${index}`}
          parentMenuOpen={this.state.menuOpen}
          label={i.label}
          onClick={(event) => {
            if (!!this.nestedRef) {
              event.stopPropagation();
              // This is a hack to force the nested menu to open on touch devices.
              // the `NestedMenuItem` library doesn't correctly support touch events, only hover
              this.nestedRef.parentElement.focus();
            }
          }}
        >
          {i.children.map((nestedI, nestedIndex) => {
            return this.renderMenuItem(nestedI, index * 1000 + nestedIndex);
          })}
        </NestedMenuItem>
      );
    } else if (!!i.fileUploader) {
      return (
        <FileUploader
          label={i.label}
          key={`contextMenu-item-${index}`}
          handleFile={(file) => {
            // setting up the reader
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");

            // here we tell the reader what to do when it's done reading...
            reader.onload = (readerEvent) => {
              const content: string = readerEvent.target?.result as string; // this is the content!
              if (!!i.fileLoadedAction) {
                i.fileLoadedAction(content);
              }
              this.props.hideContextMenu();
            };
          }}
        ></FileUploader>
      );
    } else {
      return (
        <MenuItem
          key={`contextMenu-item-${index}`}
          onClick={this.handleContextItemClicked(i)}
        >
          {i.label}
        </MenuItem>
      );
    }
  };

  private handleMenuClosed = () => {
    this.setState({
      menuOpen: false,
    });
    this.props.hideContextMenu();
  };
  private preventDefault = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  private handleContextItemClicked = (item: ContextMenuItem) => () => {
    if (!!item.action) {
      item.action();
    }
    if (!!this.props.contextItemClicked) {
      this.props.contextItemClicked(this.props.items[0]);
    }
    if (!!item.action) {
      if (!!this.nestedRef) {
        this.nestedRef.blur();
      }
      this.props.hideContextMenu();
    }
  };
}

export default ContextMenu;
