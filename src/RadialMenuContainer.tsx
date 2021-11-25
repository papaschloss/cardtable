import { connect } from "react-redux";
import { myPeerRef } from "./constants/app-constants";
import { cardsSelectedWithPeerRef } from "./features/cards/cards.selectors";
import {
  exhaustCard,
  deleteCardStack,
  flipCards,
  toggleToken,
  adjustCounterToken,
  clearCardTokens,
  adjustModifier,
  addToPlayerHand,
  toggleExtraIcon,
} from "./features/cards/cards.slice";
import {
  shuffleStack,
  drawCardsOutOfCardStack,
} from "./features/cards/cards.thunks";
import { getGame, getRadialMenuPosition } from "./features/game/game.selectors";
import { hideRadialMenu } from "./features/game/game.slice";
import RadialMenu from "./RadialMenu";
import PlanetMenu from "./PlanetMenu";
import { RootState } from "./store/rootReducer";

const usePlanetMenu = false;

const mapStateToProps = (state: RootState) => {
  return {
    selectedCardStacks: cardsSelectedWithPeerRef(myPeerRef)(state),
    currentGameType: getGame(state).activeGameType,
    position: getRadialMenuPosition(state),
    playerNumber: getGame(state).playerNumbers[myPeerRef],
    drawCardsIntoHand: getGame(state).drawCardsIntoHand,
  };
};

const RadialMenuContainer = connect(mapStateToProps, {
  flipCards,
  exhaustCard,
  deleteCardStack,
  toggleToken,
  shuffleStack,
  adjustCounterToken,
  hideRadialMenu,
  clearCardTokens,
  drawCardsOutOfCardStack,
  adjustModifier,
  addToPlayerHand,
  toggleExtraIcon,
})(usePlanetMenu ? PlanetMenu : RadialMenu);

export default RadialMenuContainer;
