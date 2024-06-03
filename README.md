# Sample Sidebar
<p align="center">
    <img src="https://nodei.co/npm/@sophat/check-validation.png?downloads=true&downloadRank=true&stars=true"/>
    <br/>
    <img src="https://img.shields.io/npm/dw/%40sophat%2Fcheck-validation?style=flat-square&label=Downloads&labelColor=d42932&color=%231fa8e0">
    <img src="https://img.shields.io/npm/v/%40sophat%2Fcheck-validation?style=flat-square&label=Versions&labelColor=d42932&color=%231fa8e0">
    <img src="https://img.shields.io/bundlephobia/min/%40sophat%2Fcheck-validation?style=flat-square&label=Size&labelColor=d42932&color=%231fa8e0">
    <img src="https://img.shields.io/github/stars/pphatdev?style=flat-square&label=Star&labelColor=d42932&color=%231fa8e0">
</p>


## npm: ***@sophat/check-validation***
The `@sophat/check-validation` checking validation.

## ⬇️ Installation
```sh
npm install @sophat/check-validation --dev
```

## 📂 Usage

### Import
```js
import { Validate } from "@sophat/check-validation";
```

# Checking Phone
```js
Validate.phone("010 125 6783") // true
Validate.phone("+855 10 125 6783") // true

Validate.phone("010 125 67832") // false
Validate.phone("+855 10 125 67832") // false
```

# Check Email
```js
Validate.email("info@pphat.me") // true
Validate.email("info@pphat.xyz") // true
Validate.email("-info@pphat.xyz") // false
```

# Check Password
```js
Validate.password("@Ashsdl93") // true
Validate.password("123abc") // false
```

# Check Is Empty
> Ignoring Spacing and null able

```js
Validate.isEmpty("string") // false
Validate.isEmpty("") // true
Validate.isEmpty("    ") // true
Validate.isEmpty() // true
```

# Check Is Number

```js
Validate.isNumber("123") // true
Validate.isNumber(0.123) // true
Validate.isNumber("abcdef") // false
```

## 🪲 Bugs
[Bug Report](https://github.com/pphatdev/checking-validation/issues/new)
