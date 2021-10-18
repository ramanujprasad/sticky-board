# Sticky Board
A Scrum Board (similar to Miro Board) to work with widgets (stickies).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## URL
[Sticky Board Application Live URL](https://ramanujprasad.github.io/sticky-board/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Topic Cover

This application covers following feature:

1. New stickies can be created by clicking on **+** icon on the top-left side of board.
2. **Dragg & Dropp** - Stickies can be dragged and dropped anywhere on the board. It's position gets saved automatically.
3. **Stickies description** - It can be added at the place of 'Enter your text here...'. Description gets saved automatically as soon as you move to other field. 
4. **Stickies color** - It can be changed by clicking the bottom-left icon of the sticky. After choosing the color, click on 'OK' button to save the changes.
5. Stickies can be **deleted** by clicking the bottom-right icon of the sticky.
6. The newer created stickie lies higher on the board. Stickies has possibility to drag stickies on top of each other and the order is maintained.
7. On focus of bottom sticky, It should appears on top of everyone. It can be edited easily after that. 
8. Page can be refreshed by clicking on **refresh** icon on the top-right header. 
9. All created sticky and application data can be deleted by clicking on **delete** icon on the top-right header. 
10. Application is fully responsive on difference-difference resolution.
11. Unit testes are written for most of the scenarios


## Code Structure

1. Component: Contains all component across for this application:
    * Header Component: Application header contains **Refresh**, **Delete all** features.
    * Sticky Component: Individual **Sticky** and it's features.
    * Sticky Container Component: List of section where sticky can be placed like **DEFAULT, START, STOP** and **CONTINUE**.
    * Sticky Board Component: It contains rest of the section.
2. Services:
    * Local Storage: Used for storing the data to browser local storage.
3. Models: contains sticky and sticky containers interface 
4. Constants: contains constants file used in the application
 
## Improvements

- This application is quite small and has only one page so features like folder re-structuring, Individual module creation (shared, core etc), Lazy loading, Internationalization etc is not added.
- Some edge cases like placing bottom sticky on the top while dragging has some issues. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### List of unit test cases
![List of unit test cases](https://github.com/ramanujprasad/sticky-board/blob/master/src/assets/test-cases.png)
### Test Covarege Report
![Test Covarege Report](https://github.com/ramanujprasad/sticky-board/blob/master/src/assets/test-coverage.png)
### Application look
![Application Image](https://github.com/ramanujprasad/sticky-board/blob/master/src/assets/sticky-board.png)
