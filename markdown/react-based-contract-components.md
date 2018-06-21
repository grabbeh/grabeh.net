---
path: '/react-based-contract-components'
title: 'React-based contract components'
date: "20 June 2018"
---

People seem to be building everything in [React](https://reactjs.org) these days. I thought I would join the bandwagon and think about how a React system for contracts would look like.

React gives you the ability to create components that can be linked together to create a page, an app, a view or whatever you're using React for. Contracts consist of a collection of clauses, which (hopefully!) make sense in unison. The potential for crossover and the use of React to build clauses and contracts struck me as one worth exploring.

An issue with existing contracts is that variable data and boilerplate are combined from the outset meaning that extracting and recording the data later can be time-consuming, and certain data may be missed.

One objective of creating a React-baesd system would be to give more certainty and consistency in the type of data that goes into a contract. This data could be extracted from multiple contracts to give an aggregated view, say on liability exposure, non-solicitation or breach notification. 

One aspect of React is that you can determine what is displayed to a user based on properties provided to a component. Here's an example of how this works, with you first defining a component, then using it to render the result of the base content combined with the introduced data:

```jsx
const Hello = ({name}) => (
  <div>Hello {name}</div>
) 
```

```jsx
<Hello name="World"/>
```

```html
...results in "Hello World"
```

Here's an example of how the above combination of data and markup could be used in a standard contract clause. With this method we can a) outline key data of relevance to the contract and b) create configurability so that every time you need the clause you don't have to re-draft but instead can modify through providing different properties to the component.

```jsx
const Confidentiality = ({ 
  periodOfProtection,
  mutual, 
  recipient, 
  discloser
}) => (
<div>{mutual ? "Each party" : { recipient } } shall not disclose any Confidential Information to a third party without the prior written consent of { mutual ? "the other party" : { discloser } } for a period of { periodOfProtection } years from the date of disclosure of the Confidential Information.</div>
)
```

```jsx
<Confidentiality periodOfProtection={5}  mutual />
```

```
results in:

"Each party shall not disclose any Confidential Information to a third party without the prior written consent of the other party for a period of 5 years from the date of disclosure of the Confidential Information."
```

In this way there can be a separation between the creator of the component and the user. A component could be created collaboratively by a legal team, with it then being able to be used by a broader range of teams without their further involvement. The legal team do not have to worry about the non-legal teams varying the underlying wording, and the non-legal team have a set of clear parameters that will need to be input to create a clause or agreement. 

Also, circumstances where you would have to maintain two separate templates (mutual vs one-way NDAs for example) could now be combined into one to reduce repetition of boilerplate language. In turn this would reduce workload by reducing the number of templates that revised boilerplate would have to be tracked across.

If you notice, the clause makes use of  { x ? y : z } notation. This is called a ternary operators in JavaScript. Ternary operators allow either X or Y values to be inserted into a clause dependent on the given variable (in this case whether or not the confidentiality obligation is mutual).

In addition to flexible clauses, general tools could be created to cover automatic clause numbering, definitions and regulations to allow easier tracking and updating of each of those categories. Here's how a clause number component could look:

```jsx
<ClauseNumbering>
  <Interpretation />
  <Services />
  <IntellectualProperty />
  <Liability />
  <Termination />
  <DataProtection />
  <General />
</ClauseNumbering>

```

```
results in:

1. Interpretation
2. Services
3. IntellectualProperty
4. Liability
5. Termination
6. DataProtection
7. General
```

I think the above gives a basic outline of what could be possible with react-based contract components. 

In due course I hope to publish some additional blogs and code to flesh out the above principles with some more concrete examples.






