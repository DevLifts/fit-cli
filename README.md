# Fit CLI

- Command: `fit`

## Overview of Features

- Ability to log 1 rep maxes for each of the big 5 (Squat, Deadlift, Bench, Overhead Press, Bent Over Row)
- Ability to log that you worked out today (I think an arbitrary notes field is a good enough start here)
- Ability to log how many hours per sleep you got last night (+ an arbitrary notes field)
- Ability to log meals (I'm thinking a bare minimum implementation would take a meal name, protein, fat, and carbs)
- Ability to retrieve things you've logged (would be really interesting if this could actually just be returning JSON from the API)

## Setup
Run `npm link` in the project directory.

## Usage

### 1RM

1RM Usage: `fit log 1rm bench 305`

Retrieve 1RM Usage:

`fit 1rm --all`

`fit 1rm bench`

### Workouts

Workout Usage: `fit log workout "had a great workout blah blah blah"`

Retrieve Workout Usage:

`fit workouts --all`

`fit workouts --month "july" --year 2018`

`fit workout --month "july"`

`fit workouts --year 2018`

### Meals

Meal Usage: `fit log meal "Chicken, white rice, green beans" --protein 96 --fat 22 --carbs 150`

Retrieve Meal Usage:

`fit meals --all`

`fit meals --day "7/14/2018"`

`fit meals --month "july"`

`fit meals --year 2018`


### Sleep

Sleep Usage: `fit log sleep 7.5 "woke up a lot - probably because of all that coffee before bed"`

Retrieve Sleep Usage:

`fit sleep --all`

`fit sleep --day "7/14/2018"`

`fit sleep --month "july"`

`fit sleep --year 2018`
