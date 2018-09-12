---
{
  "title": "Buttons",
  "layout": "LayoutComponent",
  "summary": "Invoke and communicate an action that will occur",
  "title_metadata": "CdrButton",
  "vertical": [
      {
        "type": "do",
        "image": "button/button_vert_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper vertical button grouping",
        "caption": "match button widths"
      },
      {
        "type": "dont",
        "image": "button/button_vert_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizing",
        "caption": "mix button sizes."
      }
    ],
    "horizontal": [
      {
        "type": "do",
        "image": "buttons/button_horiz_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper button height grouping",
        "caption": "match button heights."
      },
      {
        "type": "dont",
        "image": "buttons/button_horiz_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizing",
        "caption": "mix button sizes."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "buttons/button_label_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper text length",
        "caption": "minimize label length."
      },
      {
        "type": "dont",
        "image": "buttons/button_label_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with too much text",
        "caption": "put too much text in a button."
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "buttons/button_case_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper text sentence case",
        "caption": "use sentence case."
      },
      {
        "type": "dont",
        "image": "buttons/button_case_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with title case",
        "caption": "use title case."
      }
    ],
    "noun": [
      {
        "type": "do",
        "image": "buttons/button_noun_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper noun capitalization",
        "caption": "capitalize any proper nouns."
      },
      {
        "type": "dont",
        "image": "buttons/button_noun_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with all uppercase text",
        "caption": "use all caps."
      }
    ],
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "versions": [
    {
      "components": [
        {
        "name": CdrButton,
        "api": {
        "props": [
          {
            "name": "tag",
            "type": "string",
            "default": "button",
            "description": "Renders CdrButton as a <button> or <a> element. When using the value of <a>, this element renders as an achor link. Possible values: { 'button' | 'a' }"
          },
          {
            "name": "type",
            "type": "string",
            "default": "button",
            "description": "Sets the button type. Possible values: { 'button' | 'submit' | 'reset' }"
          },
          {
            "name": "onClick",
            "type": "function",
            "default": "return null",
            "description": "Add custom click actions"
          },
          {
            "name": "fullWidth",
            "type": "boolean",
            "default": "false",
            "description": "Sets button width to 100%. Setting this value to true will set the button width to 100% of the parent container. Use the full-width prop with the size prop to control top and bottom padding"
          },
          {
            "name": "size",
            "type": "string",
            "default": "medium",
            "description": "Sets the button size. Possible values: { small, medium, large }"
          },
          {
            "name": "responsiveSize",
            "type": "array",
            "default": "n/a",
            "description": "Sets the button size at different responsive breakpoints. Breakpoints are expressed as t-shirt sizing with values: xs, sm, md, and lg. Examples: { ‘large@xs’ | ‘small@lg’ }"
          },
          {
            "name": "iconOnly",
            "type": "boolean",
            "default": "false",
            "description": "Renders an icon-only button. When this value is true, it will override the size and responsiveSize props"
          },
          {
            "name": "onDark",
            "type": "boolean",
            "default": "false",
            "description": "Renders an icon-only button with a light fill color for use on dark backgrounds. The 'iconOnly' prop must be true."
          },
          {
            "name": "modifier",
            "type": "string",
            "default": "n/a",
            "description": "Modifies the style variant for this component. Possible values: { 'secondary' }"
          }                          
        ],
        "slots": [
          {
            "name": "default",
            "description": "Slot for the readable text of the button. Leave empty if icon-only"
          },
          {
            "name": "icon",
            "description": "Slot for the icon in a button"
          }
        ],
        "installation": [
          {
            "name": "@rei/cdr-button",
            "type": "Node module package",
            "description": "Import the component into your project"
          },
          {
            "name": "cdr-button.css",
            "type": "Style sheet",
            "description": "Component specific styles"
          }
        ]
        }
      }
    ],
      "version": "1.0.0"
    }
  ],
  "see_also": [
    {
      "text": "See Also",
    },
    {
      "text": "Call to Action",
      "href": "../cta/"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell tab-name="Overview">

## Primary

Use primary buttons for actions to complete a task or move forward in a process such as &quot;Add to cart.&quot; There is only 1 primary action per major page section.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/wk2o3k9qwk" >

```html
  <cdr-button>Add to cart</cdr-button>
  <cdr-button disabled>Add to cart</cdr-button>
```

</cdr-doc-example-code-pair>



## Secondary

Use secondary buttons for all actions that do not move the user to the next step or are additional user actions such as &quot;Add to wish list&quot; or &quot;Find a campout near you.&quot;

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/wk2o3k9qwk" >

```html
  <cdr-button modifier="secondary">Add to wish list</cdr-button>
  <cdr-button modifier="secondary" disabled>Add to wish list</cdr-button>
```

</cdr-doc-example-code-pair>

## Text and Icon

Pair an icon with text to improve recognition about an object or action.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/wk2o3k9qwk" >

```html
  <div>
    <cdr-icon-sprite />
    <cdr-button
      modifier="secondary"
    >
      <cdr-icon
        slot="icon"
        use="#play-stroke"
        class="cdr-button__icon"
        modifier="inherit-color"
      />
      Play video
    </cdr-button>
    <cdr-button
      modifier="secondary"
    >
      <cdr-icon
        slot="icon"
        use="#play-stroke"
        class="cdr-button__icon"
        modifier="inherit-color"
        disabled
      />
      Play video
    </cdr-button>
  </div>
```

</cdr-doc-example-code-pair>

## Icon Only

Use to visually communicate an object or action in limited space. Include alternative text to describe what button does.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/wk2o3k9qwk" >

```html
  <div>
    <cdr-icon-sprite />
    <cdr-button
      :icon-only="true"
      aria-label="More information about icon"
    >
      <cdr-icon
        slot="icon"
        class="cdr-button__icon"
        use="#question-fill"
        modifier="inherit-color"
      />
    </cdr-button>
  </div>
```

</cdr-doc-example-code-pair>

## Sizing

Change the button size based on where button is used. Default size is medium. Small is used for supplemental user actions such as product comparison or filter. Large is used for &quot;Add to cart&quot; on product pages or Call to Action.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/wk2o3k9qwk" >

```html
    <div>
      <cdr-button size="small">Add to cart</cdr-button>
      <cdr-button>Add to cart</cdr-button>
      <cdr-button size="large">Add to cart</cdr-button>
    </div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- For icon-only buttons, provide `aria-label` text that describes the button's action
- Apply keyboard interaction patterns as described on [REI universal design and accessibility: Buttons](https://confluence.rei.com/display/accessibility/Buttons)

<br />

This component has no specific WCAG compliance attributes built into the control. It is possibile to define this component as a link or button:

- Select the semantically correct element, which will ensure that assistive technologies have correct instructions for how to interact with the component
- Use the CdrLink component to make a button that looks like a link
- Do not use `div` or `input` elements
- Do not add `role="button"` to the CdrButton component

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
  <cdr-doc-table-of-contents-shell>

## Use When

- Triggering an action  
- Enabling a “final” action  
- Progressing or regressing a user through a step in a flow
- Submitting requested information
- Confirming the completion of a flow or cancelling out of it

### Don't use when

- Navigating to another page on a site. Instead use [Call to Action](../cta/)
- Taking users to a different part within the same page. Instead, use [Links](../links/)

## Foundations

Change the button size when:
  - Medium - default size
  - Small - for supplemental user actions such as product comparison or filter on product pages
  - Large - XS grid with full breakpoint width; in mobile version. Also, for &quot;Add to cart&quot; on product pages or [Call to Action](../cta/) on campaign pages

<br />

When stacking buttons vertically:
  - Align left borders
  - Display all with the same width
  - Separate each by stack-1-x spacing
  <cdr-img :src="$withBase(`/button/Spec__Button_Vertical_Spacing_16-4.png`)"/>

<br />

When arranging buttons horizontally:
  - Align top borders
  - Display all with the same height
  - Separate each by standard inline-1-x spacing
  <cdr-img :src="$withBase(`/button/Spec__Button_Horizontal_Spacing_16-9.png`)"/>

<br />

When grouping buttons, match button sizes either horizontally or vertically

<do-dont :examples="$page.frontmatter.vertical" />

<br />

<do-dont :examples="$page.frontmatter.horizontal" />

<br />

## Content

  - Clearly and concisely label with 1–3 words and fewer than 20 characters, including spaces

  - Start with a verb, if possible. Labels must be action-oriented and set expectations for what the user will see next

  - Never repeat the context of a label when the context is already clear. For example, for a &quot;Save&quot; button, do not expand to &quot;Save Account Information&quot;

  - Use sentence case, not all caps, title caps or all lowercase

### Do / Don't

  <do-dont :examples="$page.frontmatter.label" />

  <do-dont :examples="$page.frontmatter.case" />

  <do-dont :examples="$page.frontmatter.noun" />

## Behavior

### Choosing a Button or Link

When making decisions about using this component styled as a link or a button, consider the following:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Answers the question, "Where can I go"                                                              | Answers the question, "What can I do"                                                |
| Search engine crawlers can follow anchors for links (**&lt;a&gt;**)                                 | Search engine crawlers **cannot** follow links that are submitted by input or button |
| Default keyboard behavior is triggered using the **enter** key                                      | Default keyboard behavior is triggered using the **space** or **enter** key          |
| **Cannot be disabled** like buttons but can be made inert with tabindex="-1" and aria-hidden="true" | Can be disabled with disabled attribute                                              |

<br />

Apply the following use cases when deciding when to use links as anchors or buttons:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Navigating user to a new page or view                                                               | Toggling a display to full screen                                                    |
| Changing the URL                                                                                    | Opening a modal window                                                               |
| Causing a browser redraw/refresh                                                                    | Triggering a popup menu                                                              |
| Supporting internal page jumps                                                                      | Can be disabled with disabled attribute                                              |

## Resources

  - WebAIM: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
  - WebAIM [WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist)

  </cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [CdrButton package:](https://www.npmjs.com/search?q=cdr-button)

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-button`
- Component styles: `cdr-button.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrButton package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-button
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-link/dist/cdr-button.css";
```

### 3. Add component to a template

In this example we’ll create a medium-sized primary button, which is the default.

_local.vue_

```vue
<template>
  <cdr-button
    type="button"
  >
    Add to cart
  </cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
export default {
  ...
  components: {
     CdrButton  
  }
}
</script>
```

## Usage

### Size, responsive size, and full-width sizing props

The below example uses both the `size` and `responsive-size` props. This button’s size is small, but it will become a large button at the `xs` and `sm` breakpoints.

```vue
<template>
  <cdr-button
    size="small"
    :responsive-size="[‘large@xs’, ‘large@sm’]"
  >
    Add to cart
  </cdr-button>
</template>
```

### Modifiers

Following variants are available to the `cdr-button` modifier attribute:

| `secondary` | Sets the secondary style for the button |
| ---         | ---                                     |


### Click Actions

Use the `on-click` prop to attach custom actions and event handling.

```vue
<template>
  <cdr-button
    :on-click="greet"
  >
    Greet
  </cdr-button>
</template>

<script>
export default {
  ...
  methods: {
    greet() {
      console.log(‘Hello there’);
    }
  }
}
</script>
```

## Composing with icons

CdrButton component can be used with the icon component from the CdrIcon package.

### Text and Icon

To scale Cedar icons appropriately, include the `cdr-button__icon` class with any icon component. The `size` prop scales both the icon and button.

In the below example, a _Download_ button is rendered as a button with icon and text using `cdr-icon` and the icon sprite.

```vue
<template>
  <cdr-button>
    <cdr-icon
      slot="icon"
      class="cdr-button__icon"
      use="#download"
    />
    Download
  </cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
import { CdrIcon } from '@rei/cdr-icon;
export default {
  ...
  components: {
     CdrButton,
     CdrIcon,  
  }
}
</script>
```

### Icon Only

Use the following props to modify `cdr-button`:

- Default slot must be empty. If text is present in default slot, the text will render  
- `size` prop is disable when `icon-only` prop is true
- For the SVG files:
  - If the `fill` color is dark, assign true to the `on-dark` prop
  - `on-dark` prop only works if `icon-only` prop is also true
- Add `aria-label` text to describe the button’s action when clicked or tapped

```vue
<template>
  <cdr-button
    :icon-only="true"
    :on-dark="true"
    aria-label="Complete this step"
  >
    <icon-check-lg
      slot="icon"
      class="cdr-button__icon"
    />
  </cdr-button>
</template>
```


### CdrCloseButton & CdrPlayButton

The CdrButton package includes two specific icon-only variants. CdrCloseButton and CdrPlayButton include their respective icons and `aria-label` text for accessibility.

```vue
<template>
  <cdr-close-button />
</template>

<script>
import { CdrCloseButton } from '@rei/cdr-button';

export default {
  ...
  components: {
     CdrCloseButton  
  }
}
</script>
```

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Renders using an anchor or button element
- Includes secondary button style
- Supports small, medium, large, responsive, and full-width sizes
- Works with `cdr-icon` for icons in buttons and icon-only buttons
- CdrButton package includes `cdr-close-button` and `cdr-play-button` components
- Git commit reference [(1531860)](https://github.com/rei/rei-cedar/pull/436/commits/15318606570811a6d53549a5335e0943a3463971)

</template>
</cdr-doc-tabs>