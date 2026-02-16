# Klassen- und Domain-Modell

Diese Doku ist absichtlich formatoffen gehalten: du kannst sie sp\u00e4ter auch aus UML, ADRs oder Code-Annotationen generieren.

## Kernobjekte

### `Household`

- repr\u00e4sentiert einen Haushalt
- enth\u00e4lt `members`, `settings`, `modules`

### `Member`

- Benutzer innerhalb eines Haushalts
- besitzt Rollen und Berechtigungen

### `Module`

- kapselt ein Homebook-Feature
- Beispiel: `finance`, `wiki`, `meal-plan`

## Hinweis

Wenn du sp\u00e4ter automatisieren willst, bietet sich z. B. ein docs-generator pro Sprache an (TypeDoc, JSDoc, Compodoc, etc.), dessen Output du in `docs/` einbindest.
