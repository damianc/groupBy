# groupBy

Method to group an array of objects.

```
groupBy(
  key: string | (
    item: Record<string,any>,
    index: number
  ) => string,
  selector?: (
    item: Record<string,any>
  ) => any
)
```

## Examples

```
const data = [
  {lang: 'en', title: 'Coding Apes'},
  {lang: 'pl', title: 'Kodujące małpy'},
  {lang: 'en', title: 'Cracking JS'}
];

// group titles by lang of book
console.log(
  data.groupBy('lang', book => book.title)
);

/*
{
  "en": [
    "Coding Apes",
    "Cracking JS"
  ],
  "pl": [
    "Kodujące małpy"
  ]
}
*/
```

```
// group books by first letter of title
console.log(
  data.groupBy(book => book.title[0])
);

/*
{
  "C": [
    {
      "lang": "en",
      "title": "Coding Apes"
    },
    {
      "lang": "en",
      "title": "Cracking JS"
    }
  ],
  "K": [
    {
      "lang": "pl",
      "title": "Kodujące małpy"
    }
  ]
}
*/
```
