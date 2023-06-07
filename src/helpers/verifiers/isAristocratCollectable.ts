import { Aristocrat, BasicColor, Player } from "@/types";

export function isAristocratCollectable(player: Player, aristocrat: Aristocrat) {
  const cardColors = Object.keys(aristocrat.requiredCards) as BasicColor[]
  return cardColors.every(cardColor => {
    const playersCardsNumber = player.cards[cardColor].length
    const requiredCardsNumber = aristocrat.requiredCards[cardColor] ?? 0
    return playersCardsNumber >= requiredCardsNumber
  })
}
