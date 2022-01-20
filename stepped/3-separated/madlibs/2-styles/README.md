# Mad Libs

Players can put in random words to create funny stories.

## DOM

| tag name    | attributes                                                            | role                                 |
| ----------- | --------------------------------------------------------------------- | ------------------------------------ |
| `<section>` | `id='user-interface'`, `class='centered'`                             | contains the user interface elements |
| `<form>`    | `class='vertical'`                                                    | groups all user inputs               |
| `<input>`   | `name='noun'`, `type='text'`, `placeholder='enter a noun'`            | where users enter their noun         |
| `<input>`   | `name='verb'`, `type='text'`, `placeholder='enter a verb'`            | where users enter their verb         |
| `<input>`   | `name='adjective'`, `type='text'`, `placeholder='enter an adjective'` | where users enter their adjective    |
| `<input>`   | `name='adverb'`, `type='text'`, `placeholder='enter an adverb'`       | where users enter their adverb       |
| `<input>`   | `type='button'`, `value='be funny'`                                   | the button for generating the madlib |
| `<pre>`     | `class='fancy-text'`                                                  | where the madlib will be displayed   |

## Styling

| class name    | description                                       | role                                                                      |
| ------------- | ------------------------------------------------- | ------------------------------------------------------------------------- |
| `.centered`   | centers the element, even as children are resized | centers the user interface and keeps it steady when madlibs are generates |
| `.vertical`   | displays children vertically                      | makes sure the form is in rows                                            |
| `input`       | sets the width on all inputs                      | start them at a reasonable size and keep them from resizing               |
| `.fancy-text` | styles where text in it's container               | so the madlib isn't boring to read                                        |

## Listeners

| type | attached to | callback |
| ---- | ----------- | -------- |
|      |             |          |

## Handlers

| syntax | parameters | return value | behavior |
| ------ | ---------- | ------------ | -------- |
|        |            |              |          |

## Utils

| syntax | parameters | return value | behavior |
| ------ | ---------- | ------------ | -------- |
|        |            |              |          |
