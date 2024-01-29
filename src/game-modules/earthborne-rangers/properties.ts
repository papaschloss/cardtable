import {
  CardAttachLocation,
  CounterTokenType,
} from "../../constants/card-constants";
import { GameProperties } from "../GameModule";

export const properties: GameProperties = {
  deckSite: "",
  decklistApi: "",
  decklistSearchApi: "",
  allowSpecificCardSearch: true,
  decklistSearchApiConstants: "",
  encounterUiName: "Sets",
  initialPlaymatImageLocation:
    "/images/from_modules/earthborne-rangers/ebr_global_board.png",
  customPlaymatWidth: 1540,
  additionalPlaymatImageOptions: {
    layout: "column",
    additionalImages: [
      {
        displayName: "Player Mat",
        imgUrl: "/images/from_modules/earthborne-rangers/ebr_player_board.png",
      },
    ],
  },
  possibleIcons: [
    {
      iconId: "blue_ranger_token",
      iconName: "Blue Ranger Token",
      iconImageUrl:
        "/images/from_modules/earthborne-rangers/blue-ranger-token.png",
    },
    {
      iconId: "purple_ranger_token",
      iconName: "Purple Ranger Token",
      iconImageUrl:
        "/images/from_modules/earthborne-rangers/purple-ranger-token.png",
    },
    {
      iconId: "red_ranger_token",
      iconName: "Red Ranger Token",
      iconImageUrl:
        "/images/from_modules/earthborne-rangers/red-ranger-token.png",
    },
    {
      iconId: "yellow_ranger_token",
      iconName: "Yellow Ranger Token",
      iconImageUrl:
        "/images/from_modules/earthborne-rangers/yellow-ranger-token.png",
    },
  ],
  modifiers: [],
  tokens: {
    stunned: null,
    confused: null,
    tough: null,
    damage: {
      counterTokenType: CounterTokenType.Damage,
      isNumeric: true,
      touchMenuLetter: "Prg",
      menuText: "Set Progress",
      imagePath: "/images/from_modules/earthborne-rangers/progress_token.png",
    },
    threat: {
      counterTokenType: CounterTokenType.Threat,
      isNumeric: true,
      touchMenuLetter: "Harm",
      menuText: "Set Harm",
      imagePath: "/images/from_modules/earthborne-rangers/harm_token.png",
    },
    generic: {
      counterTokenType: CounterTokenType.Generic,
      isNumeric: true,
      touchMenuLetter: "Gen",
      menuText: "Set General",
      imagePath: "/images/from_modules/earthborne-rangers/general_token.png",
    },
    acceleration: null,
  },
  iconCounters: [],
  useAltCardArtByDefault: true,
  defaultAttachLocation: CardAttachLocation.UpAndRight,
  tableCardSlots: [
    { landscape: false, relativeX: 505, relativeY: 218 },
    { landscape: false, relativeX: 677, relativeY: 218 },
    { landscape: false, relativeX: 953, relativeY: 218 },
    { landscape: false, relativeX: 1123, relativeY: 218 },
    { landscape: true, relativeX: 824, relativeY: 513 },
  ],
};
