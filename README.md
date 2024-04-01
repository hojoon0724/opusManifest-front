# Product Requirements Documentation

**Summary**

| Field         | Detail                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------ |
| Project Name  | OpusManifest                                                                                     |
| Description   | A database where composers can enter their compositions' details and show their catalog of works |
| Developers    | Hojoon Kim                                                                                       |
| Repo-back     | https://github.com/hojoon0724/opusManifest-back                                                  |
| Repo-front    | https://github.com/hojoon0724/opusManifest-front                                                 |
| Live Backend  | https://opusmanifest-back.onrender.com                                                           |
| Live Frontend |                                                                                                  |

## Problem Being Solved and Target Market

Composers struggle to keep track of their works and showcase them effectively on their websites. This app simplifies this process, providing a straightforward solution for composers to organize their catalog and seamlessly display it online.

## User Stories

- Users should be able to see the site on desktop and mobile
- Users can create a new entry
- Users can see all their works on the dashboard
- Users can see a detail page of selected work
- Users can update the work
- Users can delete the work

## Server Details

Server url: https://opusmanifest-back.onrender.com/

| Endpoint          | Method | Response                                        | Other                               |
| ----------------- | ------ | ----------------------------------------------- | ----------------------------------- |
| /compositions     | GET    | JSON of all items                               |                                     |
| /compositions     | POST   | Create new item return JSON of new item         | body must include data for new item |
| /compositions/:id | GET    | JSON of item with matching id number            |                                     |
| /compositions/:id | PUT    | update item with matching idea, return its JSON | body must include updated data      |
| /compositions/:id | DELETE | delete the item with the matching id            |                                     |

## Component Architecture

```mermaid
flowchart LR
  App-->Header
  App-->Main
  App-->Footer
  Main-->Router
  Router-->Admin
  Router-->Index
  Index-->Show
  Admin-->Create
  Admin-->AdminShow
  Admin-->Edit
  Admin-->Delete
```

## User Interface Mockups

## Desktop

#### Index

<img src="./wireframeMockup/Index@1x.png">

#### Show

<img src="./wireframeMockup/Show@1x.png">

#### Bulk Edit

<img src="./wireframeMockup/Bulk Edit@1x.png">

## Mobile

#### Index

<img src="./wireframeMockup/Index Mobile.png">

#### Show

<img src="./wireframeMockup/Show Mobile.png">

#### Bulk Edit

<img src="./wireframeMockup/Bulk Edit Mobile.png">
