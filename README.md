# Crrot Market

https://github.com/kts2442/carrot-clone

# About 4.7 Modifiers for Forms - 230409

## 1. group modifer

Parent의 상태를 기반으로 하부 Element들을 style 하고 싶을 때 사용

```
< a href="#" className="group">
< h3 className="group-hover:text-white transition">New project< /h3>
< /a>
```

## 2. other useful modifier

valid:
invalid:
required:
focus-within:
etc

## 2. peer modifier

sibling element의 state에 따라 style 하고 싶을때 사용

```
< input class="peer"/ >
< p class="peer-invalid:visible"> Pizza< /p>
```
