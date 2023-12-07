
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.0] - 2023-10-13
### Added
 - Parse Database to store college data and high score data
 - Added parse models for College and HighScore tables
 - Routing from Game to Rules
 - Navigation bar to handle routing
 - Displayed dummy high score data
### Changed
- Refactored components from preact to react

## [0.3.0] - 2023-11-08
### Added
 - Login / Register functionality
 - Logout functionality
 - Protected the game component to require authentication
 - Added styling to authentication pages
### Changed
 - No other changes

## [0.4.0] - 2023-12-09
### Added
 - Profile showing username, leaderboard name, description, top scores
 - Ability to set leaderboard name, description
 - Ability to view other user's profile from leaderboard
 - Game connected to leaderboard - scores will populate on leaderboard if in the top 20 scores on the site
 - Guessing correctly updates score - subsequent guesses increase score, incorrect guesses returns score to 0 and ends round
 - Live chat with other users to ask questions about game
 - e2e testing for profile component
### Changed
 - Redesigned leaderboard component with bootstrap