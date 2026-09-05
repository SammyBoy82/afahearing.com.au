'use client'

import { useEffect, useMemo, useState } from 'react'

type ToneStep = {
  id: number
  label: string
  frequency: number
  duration: number
  volume: number
}

const toneSteps: ToneStep[] = [
  { id: 1, label: 'Tone 1', frequency: 500, duration: 800, volume: 0.0022 },
  { id: 2, label: 'Tone 2', frequency: 1000, duration: 800, volume: 0.00025 },
  { id: 3, label: 'Tone 3', frequency: 2000, duration: 800, volume: 0.00042 },
  { id: 4, label: 'Tone 4', frequency: 4000, duration: 800, volume: 0.00018 },
  { id: 5, label: 'Tone 5', frequency: 6000, duration: 800, volume: 0.00045 },
  { id: 6, label: 'Tone 6', frequency: 8000, duration: 800, volume: 0.0005 }
]

export default function HearingScreeningTest() {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<(boolean | null)[]>(Array(toneSteps.length).fill(null))
  const [isPlaying, setIsPlaying] = useState(false)
  const [statusMessage, setStatusMessage] = useState('Press play to hear the first beep.')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!completed) {
      setStatusMessage(`Tone ${currentStep + 1} of ${toneSteps.length}: press play to hear the beep.`)
    }
  }, [completed, currentStep])

  const playTone = (stepIndex: number) => {
    if (typeof window === 'undefined') {
      return
    }

    const AudioContextClass = window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

    if (!AudioContextClass) {
      setStatusMessage('Audio playback is not supported in this browser.')
      return
    }

    const context = new AudioContextClass()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()
    const tone = toneSteps[stepIndex]

    oscillator.type = 'sine'
    oscillator.frequency.value = tone.frequency
    gainNode.gain.value = tone.volume

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.start()
    setIsPlaying(true)
    setStatusMessage(`Playing ${tone.label}...`)

    window.setTimeout(() => {
      oscillator.stop()
      void context.close()
      setIsPlaying(false)
      setStatusMessage('Did you hear the beep?')
    }, tone.duration)
  }

  const recordAnswer = (heard: boolean) => {
    const nextResponses = [...responses]
    nextResponses[currentStep] = heard
    setResponses(nextResponses)

    if (currentStep < toneSteps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setCompleted(true)
    }
  }

  const resetTest = () => {
    setCurrentStep(0)
    setResponses(Array(toneSteps.length).fill(null))
    setCompleted(false)
    setStatusMessage('Press play to hear the first beep.')
  }

  const heardCount = useMemo(() => responses.filter((answer) => answer === true).length, [responses])
  const missedAny = useMemo(() => responses.some((answer) => answer === false), [responses])
  const passed = heardCount >= 6 && !missedAny
  const currentTone = toneSteps[currentStep]

  return (
    <section id="hearing-screening-test" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-green/10 to-primary-orange/10 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-primary-green font-semibold mb-3">
              Quick Online Hearing Check
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              A simple 2-minute hearing check you can try at home
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              This quick screening plays short beeps and asks whether you heard them. It is for informational use only and is not a medical diagnosis.
            </p>

            {!completed ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green">
                      Step {currentStep + 1} of {toneSteps.length}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">{currentTone.label}</h3>
                  </div>
                  <div className="text-sm text-gray-500">
                    {responses.filter((answer) => answer !== null).length} of {toneSteps.length} answered
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{statusMessage}</p>
                <p className="text-sm text-gray-500 mb-4">
                  If you do not hear even one tone, the screening will be marked as a fail.
                </p>

                <button
                  type="button"
                  onClick={() => playTone(currentStep)}
                  disabled={isPlaying}
                  className="bg-primary-green text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
                >
                  {isPlaying ? 'Playing beep...' : 'Play beep'}
                </button>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => recordAnswer(true)}
                    className="bg-white border border-primary-green text-primary-green px-5 py-3 rounded-lg font-semibold"
                  >
                    Heard it
                  </button>
                  <button
                    type="button"
                    onClick={() => recordAnswer(false)}
                    className="bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-semibold"
                  >
                    Not heard
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-primary-green/20 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green mb-2">
                  Screening result
                </p>
                <h3 className={`text-2xl font-bold mb-2 ${passed ? 'text-primary-green' : 'text-gray-800'}`}>
                  {passed ? 'Pass' : 'Needs follow-up'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {passed
                    ? 'You heard all of the tones in this screening, which suggests your hearing may be working well for this basic check.'
                    : 'You did not hear one or more of the tones, so this screening has been marked as a fail. It may be worth arranging a professional hearing assessment.'}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  This is only a basic online check and not a full clinical hearing test.
                </p>
                <button
                  type="button"
                  onClick={resetTest}
                  className="mt-6 border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-semibold"
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
