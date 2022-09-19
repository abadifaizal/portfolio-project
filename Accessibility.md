# Accessible HTML

1. Below are the elements that can have label
  -  `<button>`
  -  `<input>`
  -  `<keygen>`
  -  `<meter>`
  -  `<output>`
  -  `<progress>`
  -  `<select>`
  -  `<textarea>`

2. For the other elements we can use aria-label.
3. If using div as a button don’t forget put role=“button”.
4. Allow keyboard only user to tab to it use tabindex=0.
5. Use onkeyup=“” if the div has a function in it.
6. Add aria-label=“” for the screen reader to know what is the button purpose.
7. Add tabindex attribute to any element like this : `<div tabindex="0">I'm focusable</div>`
  1. A **negative** value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
  2. **0** means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
  3. a **positive** value means should be focusable and reacable via sequential keyboard navigation, its relative order is defined by the value of the attribute: the sequential follow the inreasing number of the tabindex, their relative order follows theu relative positon in the document.
8. `document.activeElement` is used when you go back from page transition. (Tab Trapping)


## References :
- [Aria Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [Focusable Element](https://github.com/jkup/focusable)
- [Tingle Modal Plugin](https://tingle.robinparisi.com)
- [Skip Link](http://web-accessibility.carnegiemuseums.org/code/skip-link/)
- [Colors](https://webaim.org/resources/contrastchecker/)
- [Tooling](https://learn-a11y.netlify.app/tooling/index.html)
- [Resources](https://learn-a11y.netlify.app/resources/index.html)