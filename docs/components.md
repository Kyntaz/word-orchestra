# ⚙ Project Components

- [WordOrchestra](#wordorchestra)
- [Mapper](#mapper)
- [WordOrchestraUI](#wordorchestraui)
- Audio
    - [Instrument](#audioinstrument)
    - [InstrumentStorage](#audioinstrumentstorage)
    - [Performer](#audioperformer)
    - [Maestro](#audiomaestro)
    - [Environment](#audioenvironment)
- Text
    - [SentimentAnalysis](#textsentimentanalysis)
    - [SentenceDreaming](#textsentencedreaming)
    - [Analyzer](#textanalyzer)
    - [Morpheus](#textmorpheus)

## `WordOrchestra`

The `WordOrchestra` is the top level component of this project.
It has the responsibility of initializing other components.

## `Mapper`

The `Mapper` is responsible for reacting to audio analysis and making changes to other components.
In a very real sense, the `Mapper` is the brain of the project and where all the magic happens, as it is responsible for mapping parameters derived from the input into changes to the dynamics of the system.

## `WordOrchestraUI`

The `WordOrchestraUI` contains all the UI of the project.
It is responsible for rendering its related HTML, as well as getting input from the user.

## `Audio/Instrument`

Each `Instrument` is responsible for setting up an oscillator and playing notes through it.
Additionally it is responsible for controlling the timbre of the oscillator to match what is currently required.

## `Audio/InstrumentStorage`

The `InstrumentStorage` is responsible for creating and managing the pool of instruments available for the `WordOrchestra`, as well as providing available `Instruments` to `Players` and freeing up `Instruments` when `Players` don't need them anymore.

## `Audio/Performer`

Each `Performer` is responsible for requesting and playing an `Instrument`.
This involves getting general information from the `Maestro` about the properties that the current piece should have and deciding what notes to play and when.
Performers are independent from each other, but are coordinated by the `Maestro`.

## `Audio/Maestro`

The `Maestro` is responsible for hiring, firing and coordinating `Performers` as required by the system, as well as keeping track of the overall features of the music that should be produced at any given point.

## `Audio/Environment`

The `Environment` represents the room where the `Performers` are performing.
It is responsible for creating and managing the required audio nodes in order to control things like the reverberation of the space or how distorted the performance should be.

## `Text/SentimentAnalysis`

The `SentimentAnalysis` is a static component responsible for holding the specific algorithms used for analyzing and extracting sentiment metrics from sentences.

## `Text/SentenceDreaming`

The `SentenceDreaming` is a static component responsible for holding the specific algorithms used for creating new related sentences from existing sentences.

## `Text/Analyzer`

The `Analyzer` is responsible for receiving sentences, analyzing them, and keeping record of a queue of the last analysis results.
Periodically, the `Analyzer` sends out an analysis result so that something can be done with it.
The analyzer is also responsible for controlling the cadence at which it sends out analysis results.

## `Text/Morpheus`

The `Morpheus` is the dreamer. It is responsible for hearing sentences and dreaming up new sentences periodically.
