---
title: "Building an online ticketing plateform for the Olympic Games of Paris 2024"
type: 'article'
description: My journey on building this whole site with specific constraints .
imgCover: 'building-a-where-s-waldo-game-with-nextjs'
tags: [authentication, next, Tailwind, Figma, devs, Firebase]
createdAt: 2024-05-08
---

As a quick reminder: this post is not a step-by-step tutorial on how I built this website, but just a review of how I approached this project during this journey.

## Context
2024: the year where Summer Olympic Games takes place in Paris. 

Banque Populaire, our partner of choice, had already bought hundreds of these tickets for their employees.

We have been ask to develop a booking plateform so that employees can choose their events within the availaible stock.

## Design

I used the official Olympic Games booking platform as a starting point to set the layouts. The displayed informations were quite similar so I mirrored some components designs.

## Specifications

Banque Populaire wanted an authentication system without exposing their employees' emails on third party services.

We decided to use mapped IDs to serve as username for login, without password.

I decided to use Firebase as BAAS, to store both user credentials and user bookings. I indeed stacked up previous experiences that make me feel confident on using it. It's a classic combination of Firebase Auth + Firestore.

I also used [Rowy](https://www.rowy.io/) as a third party tool to mirror the Firestore DB and be able to quickly export it (one of the lacking feature of Firestore).

I used Next.js as always, and had to deploy onto an Apache server, which prevent me take advantage of all the server side Node.js supported features. 

As always in this case, I export a static version with all the API calls handled on the client side.

## Reformatted export script

This plateform had a limited lifetime and we should submit a specific reformatted table at the end, so that our client can handle the real ticket exchange.

This format should remap the ids with the original employee's email + reorder column in a certain way.

It has been the opportunity for me to discover Python to proceed. 

I used [Pandas](https://pandas.pydata.org/) as a parsing CSV library to do so. It's then just a matter of launching a script like so:

```python
import pandas as pd

# Load the data
users = pd.read_csv('input/users.csv', delimiter=';')
rowy = pd.read_csv('output/example/reported-users.csv', delimiter=';')

# Drop the 'originalid' column from the users dataframe
users = users.drop(columns=['originalid'])

# Check the columns of the dataframes
print("Columns in users: ", users.columns)
print("Columns in rowy: ", rowy.columns)

# Merge the data
merged = pd.merge(users, rowy, on='id')

# Save the merged data
merged.to_csv('output/merged.csv', index=False)

#Exec cmd: python3 merge_csv.py
```

and it create a new merged file.

## Wrapping up

I realised I could have avoid some architecture mistakes during this journey, here are some points I have noted:

- I should have set a users'data creation date through a dedicated field, this is very handful for statistics
- I should have created a maintenance page, with controllable status using a Firestore controller table
- I should have used real-time data update for bookings. The way I did it needs a full reload to get the latest data (e.g events'quotas)
- I should have implement unit & end-to-end tests. I didn't do it because it appears cumbersome to handle apis call but I lost way too much time testing the whole thing myself all the time

As always it has been a pleasure as well as a very instructive experience to work on this project, including a conventionnal but complete interaction process from the user perspective.
 

 

