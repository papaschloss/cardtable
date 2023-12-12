import { Component } from "react";
import * as React from "react";
import { IEncounterEntity } from "./features/cards-data/cards-data.selectors";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { GamePropertiesMap } from "./constants/game-type-properties-mapping";
import { GameType } from "./game-modules/GameType";
import GameManager from "./game-modules/GameModuleManager";
import { ICounter, IFlippableToken } from "./features/counters/initialState";
import { CardData } from "./external-api/common-card-data";
import startCase from "lodash.startcase";
import { IPlayerBoard } from "./features/cards/initialState";

interface IProps {
  currentGameType: GameType;
  encounterData: IEncounterEntity[];
  loadCards: (
    cards: CardData[][],
    tokens: IFlippableToken[],
    counters: ICounter[],
    playerBoards: IPlayerBoard[]
  ) => void;
}

class EncounterLoader extends Component<IProps> {
  static whyDidYouRender = false;
  render() {
    const multipleSetTypes =
      new Set(this.props.encounterData.map((e) => e.setData.setTypeCode)).size >
      1;
    return (
      <div onClick={this.cancelBubble} onKeyPress={this.cancelBubble}>
        <Autocomplete
          disablePortal
          id="encounter-loader-combobox"
          groupBy={
            multipleSetTypes
              ? (option) => startCase(option.setData.setTypeCode)
              : undefined
          }
          options={this.props.encounterData || []}
          getOptionLabel={(option) => option.setData.name}
          sx={{ width: 300 }}
          onChange={this.handleSelected}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                GamePropertiesMap[this.props.currentGameType].encounterUiName
              }
            />
          )}
        />
      </div>
    );
    // return (
    //   <div onClick={this.cancelBubble} onKeyPress={this.cancelBubble}>
    //     <Autocomplete
    //       id="encounter-loader-combobox"
    //       groupBy={
    //         multipleSetTypes
    //           ? (option) => option.setData.setTypeCode
    //           : undefined
    //       }
    //       options={this.props.encounterData || []}
    //       getOptionLabel={(option) => option.setData.name}
    //       style={{ width: 300 }}
    //       onChange={this.handleSelected}
    //       renderInput={(params) => (
    //         <TextField
    //           {...params}
    //           label={
    //             GamePropertiesMap[this.props.currentGameType].encounterUiName
    //           }
    //           variant="outlined"
    //         />
    //       )}
    //     />
    //   </div>
    // );
  }

  private handleSelected = (_event: any, value: IEncounterEntity | null) => {
    if (!!value) {
      let totalCards = [] as CardData[][];

      const filteredCards = value.cards
        // We don't want cards that show up as another card's 'back_link' to be loaded as separate cards
        .filter((c) => !value.cards.some((oc) => oc.backLink === c.code));

      // Check if the module wants to break the encounter cards up at all into other
      // stacks
      if (
        !!GameManager.getModuleForType(this.props.currentGameType)
          .splitEncounterCardsIntoStacksWhenLoading
      ) {
        totalCards = GameManager.getModuleForType(this.props.currentGameType)
          .splitEncounterCardsIntoStacksWhenLoading!!(
          value.setCode,
          filteredCards
        );
      } else {
        let campaignCards: CardData[] = [];
        let questCards: CardData[] = [];
        let encounterCards: CardData[] = [];

        filteredCards
          .filter((c) => c.typeCode.toLocaleLowerCase() === "quest")
          .forEach((c) => {
            questCards = questCards.concat(
              Array.from({ length: c.quantity }).map((_i) => c)
            );
          });

        // Right now these are set manually in the separate JSON repo and only for some card sets
        filteredCards
          .filter((c) => c.extraInfo.campaign === true)
          .forEach((c) => {
            campaignCards = campaignCards.concat(
              Array.from({ length: c.quantity }).map((_i) => c)
            );
          });

        filteredCards
          .filter(
            (c) =>
              c.typeCode.toLocaleLowerCase() !== "quest" &&
              !c.extraInfo.campaign
          )
          .forEach((c) => {
            encounterCards = encounterCards.concat(
              Array.from({ length: c.quantity }).map((_i) => c)
            );
          });

        totalCards = [encounterCards];
        if (questCards.length > 0) {
          totalCards = [questCards].concat(totalCards);
        }

        if (campaignCards.length > 0) {
          totalCards = totalCards.concat([campaignCards]);
        }
      }

      let tokens = [] as IFlippableToken[];
      if (
        !!GameManager.getModuleForType(this.props.currentGameType)
          .getTokensForEncounterSet
      ) {
        tokens = GameManager.getModuleForType(this.props.currentGameType)
          .getTokensForEncounterSet!!(value.setCode);
      }

      let counters = [] as ICounter[];
      if (
        !!GameManager.getModuleForType(this.props.currentGameType)
          .getCountersForEncounterSet
      ) {
        counters = GameManager.getModuleForType(this.props.currentGameType)
          .getCountersForEncounterSet!!(value.setCode);
      }

      let playerBoards = [] as IPlayerBoard[];
      if (
        !!GameManager.getModuleForType(this.props.currentGameType)
          .getPlayerBoardsForEncounterSet
      ) {
        playerBoards = GameManager.getModuleForType(this.props.currentGameType)
          .getPlayerBoardsForEncounterSet!!(value.setCode);
      }

      this.props.loadCards(totalCards, tokens, counters, playerBoards);
    }
  };

  private cancelBubble = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };
}

export default EncounterLoader;
