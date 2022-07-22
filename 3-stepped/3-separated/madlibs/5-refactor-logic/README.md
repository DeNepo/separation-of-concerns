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
| `<input>`   | `type='button'`, `value='be funny'`, `id='user-action'`               | the button for generating the madlib |
| `<pre>`     | `class='fancy-text'`, `id='madlib-goes-here`                          | where the madlib will be displayed   |

## Styling

| class name    | description                                       | role                                                                      |
| ------------- | ------------------------------------------------- | ------------------------------------------------------------------------- |
| `.centered`   | centers the element, even as children are resized | centers the user interface and keeps it steady when madlibs are generates |
| `.vertical`   | displays children vertically                      | makes sure the form is in rows                                            |
| `input`       | sets the width on all inputs                      | start them at a reasonable size and keep them from resizing               |
| `.fancy-text` | styles where text in it's container               | so the madlib isn't boring to read                                        |

## Listeners

| type    | attached to        | callback  |
| ------- | ------------------ | --------- |
| `click` | `id='user-action'` | `handler` |

## Handlers

| syntax           | parameters                    | return value  | behavior                                                                                                                        |
| ---------------- | ----------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `handler(event)` | Event: a user generated event | Boolean: true | reads user inputs from event, concatenates the madlib story, and renders it into `madlib-goes-here`. the user action is logged. |

## Utils

| syntax                                       | parameters                                                                                                                           | return value                   | behavior                                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------- |
| `buildMadlib(noun, verb, adjective, adverb)` | noun (_String_): the noun <br> verb (\_String): the verb <br> adjective (\_String): the adjective <br> adverb (\_String): the adverb | _String_: the generated madlib | takes in different words, and places them in a template in the correct grammatical location |
