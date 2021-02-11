# README

---

## Engines

### 1. ruby 2.7.1

### 2. rails 6.0.3.5

### 3. react 17.0.1

---

## Instruction

### 1. set up database: `rails db:setup`

### 2. bundle install

### 3. set up webpacker: `rails webpacker:install:react`

### 4. start server: `rails s`

### 5. go to browser: `localhost:3000`

## Functions:

### 1. show all books

![all books](https://res.cloudinary.com/willwang/image/upload/v1613067908/Screen_Shot_2021-02-11_at_10.15.44_AM_dz9mrb.png)

### 2. show all authors

![all authors](https://res.cloudinary.com/willwang/image/upload/v1613067908/Screen_Shot_2021-02-11_at_10.15.53_AM_vkukay.png)

### 3. show a single book



### 4. show book's authors

![book author](https://res.cloudinary.com/willwang/image/upload/v1613067907/Screen_Shot_2021-02-11_at_10.16.11_AM_mzgi25.png)

### 5. show book's alias books and references

![book ref](https://res.cloudinary.com/willwang/image/upload/v1613067907/Screen_Shot_2021-02-11_at_10.16.26_AM_k7hqta.png)
![book alias](https://res.cloudinary.com/willwang/image/upload/v1613067907/Screen_Shot_2021-02-11_at_10.16.19_AM_grzjgd.png)

### 6. edit book's reference

![book reference](https://res.cloudinary.com/willwang/image/upload/v1613067908/Screen_Shot_2021-02-11_at_10.16.40_AM_aphtnn.png)
![remove book reference](https://res.cloudinary.com/willwang/image/upload/v1613067907/Screen_Shot_2021-02-11_at_10.16.46_AM_bcubta.png)

---
## Front End Redux State Structure:

`{
  entities: {
    books: {
      1: {id: 1, title: 'title', authors: []
    },
    book: {
      title: 'title', authors: []
    },
    authors: {
      1: {id: 1, name: 'Will', books: []}
    },
    author: {
      id: 1, name: 'Will', books: []
  }
}
`


## Future Features

### 1. may add a search function no the navbar

