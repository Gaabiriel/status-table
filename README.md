[![npm version](https://badge.fury.io/js/status-table.svg)](https://badge.fury.io/js/status-table)

# status-table
A node.js component that changes the row's color when value is true or false

## Installation 
```sh
npm install status-table --save
```
## Usage

#### SharedComponent

```typescript
import { StatusTableComponent } from 'status-table';

  declarations: [
    StatusTableComponent
  ],
  exports: [
    StatusTableComponent
  ], 
  entryComponents: [
    StatusTableComponent
  ],
 ```
 
#### ExampleComponent
```typescript
import { StatusTableComponent } from 'status-table';

e.g:
 
 In ng2-smart-table settings
 
  columns: {
       active: {
        title: 'Status',
        filter: false,
        editable: false,
        type: 'custom',
        renderComponent: StatusTableComponent,
      }
 

```

## Output 

In the table it would look like.

![screenshot_45](https://user-images.githubusercontent.com/35075988/34668685-a3bd889c-f455-11e7-85b6-817ec58a20a5.png)

Green for Active. 
Red for Inactive.