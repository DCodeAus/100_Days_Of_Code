# 100 Days of Code

My log for the [#100DaysOfCode](https://www.100daysofcode.com/) challenge, started on 21 May 2022: code a little every day for 100 days. It's mostly JavaScript, following lessons from Codecademy, The Odin Project and anything else I found along the way.

## What's in here

| File | What it is |
|---|---|
| `VariablesProgram.js` | My first program with variables: stores a name and prints it. |
| `temperatureConverter.js` | Converts a temperature in Kelvin to Celsius, Fahrenheit and the Newton scale. |
| `BookmarksFromCodeAcademy.txt` | Links I saved from Codecademy lessons. |

## How to run the programs

1. Install [Node.js](https://nodejs.org), which runs JavaScript outside a web browser. Check it worked by running `node --version` in Terminal.
2. Download this repository (green **Code** button › **Download ZIP**, then unzip it) and open Terminal in that folder.
3. Run a file with `node` followed by its name:
   ```bash
   node temperatureConverter.js
   ```
   This prints:
   ```
   0
   -273
   -459.40000000000003
   -90.09
   The temperature is -460
   ```
   That's 0 Kelvin (absolute zero) in Kelvin, Celsius, Fahrenheit and Newton. To try another temperature, change `const kelvin=0;` at the top of the file and run it again.

The long decimal (`-459.40000000000003`) is normal: computers store most decimals as close approximations, so tiny rounding errors appear. The last line uses `Math.floor` to round it down.
