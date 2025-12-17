import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type VideoState = 'idle' | 'connecting' | 'connected' | 'error'

export function VideoWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [videoState, setVideoState] = useState<VideoState>('idle')
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startCall = useCallback(async () => {
    try {
      setVideoState('connecting')

      // Get local media stream
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      streamRef.current = stream

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }

      // In a real app, this would connect to a signaling server
      // For demo, we just show the local video after a brief delay
      setTimeout(() => {
        setVideoState('connected')
      }, 1000)

    } catch (err) {
      console.error('Failed to access camera/microphone:', err)
      setVideoState('error')
    }
  }, [])

  const endCall = useCallback(() => {
    // Stop all tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null
    }

    setVideoState('idle')
    setIsMuted(false)
    setIsVideoOff(false)
  }, [])

  const toggleMute = useCallback(() => {
    if (streamRef.current) {
      const audioTracks = streamRef.current.getAudioTracks()
      audioTracks.forEach((track) => {
        track.enabled = isMuted
      })
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const toggleVideo = useCallback(() => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks()
      videoTracks.forEach((track) => {
        track.enabled = isVideoOff
      })
      setIsVideoOff(!isVideoOff)
    }
  }, [isVideoOff])

  return (
    <>
      {/* Video toggle button */}
      <motion.button
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-pastel-purple to-pastel-pink text-text-primary shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close video' : 'Open video call'}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </motion.button>

      {/* Video modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (videoState === 'idle') setIsOpen(false)
            }}
          >
            <motion.div
              className="bg-surface rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-pastel-purple to-pastel-pink p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">Video Call</h3>
                  <p className="text-xs text-text-secondary">
                    {videoState === 'idle' && 'Ready to connect'}
                    {videoState === 'connecting' && 'Connecting...'}
                    {videoState === 'connected' && 'Connected (Demo)'}
                    {videoState === 'error' && 'Connection failed'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    endCall()
                    setIsOpen(false)
                  }}
                  className="w-8 h-8 rounded-full bg-surface/20 flex items-center justify-center hover:bg-surface/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Video area */}
              <div className="relative bg-black aspect-video">
                {/* Remote video (placeholder for demo) */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  {videoState === 'idle' && (
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">📹</div>
                      <p>Click Start to begin video call</p>
                    </div>
                  )}
                  {videoState === 'connecting' && (
                    <div className="text-center text-gray-400">
                      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p>Connecting...</p>
                    </div>
                  )}
                  {videoState === 'connected' && (
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">👤</div>
                      <p>Waiting for remote participant...</p>
                      <p className="text-sm text-gray-500 mt-2">(Demo mode - no actual connection)</p>
                    </div>
                  )}
                  {videoState === 'error' && (
                    <div className="text-center text-red-400">
                      <div className="text-6xl mb-4">⚠️</div>
                      <p>Could not access camera/microphone</p>
                      <p className="text-sm text-gray-500 mt-2">Please check permissions</p>
                    </div>
                  )}
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover hidden"
                  />
                </div>

                {/* Local video (picture-in-picture) */}
                {(videoState === 'connecting' || videoState === 'connected') && (
                  <div className="absolute bottom-4 right-4 w-32 sm:w-40 aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-surface">
                    <video
                      ref={localVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className={`w-full h-full object-cover ${isVideoOff ? 'hidden' : ''}`}
                    />
                    {isVideoOff && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <span className="text-2xl">🙈</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="p-4 bg-surface-alt flex items-center justify-center gap-4">
                {videoState === 'idle' || videoState === 'error' ? (
                  <button
                    onClick={startCall}
                    className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Start Call
                  </button>
                ) : (
                  <>
                    {/* Mute button */}
                    <button
                      onClick={toggleMute}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isMuted ? 'bg-red-500 text-white' : 'bg-surface border border-border text-text-primary hover:bg-surface-alt'
                        }`}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      )}
                    </button>

                    {/* Video toggle button */}
                    <button
                      onClick={toggleVideo}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isVideoOff ? 'bg-red-500 text-white' : 'bg-surface border border-border text-text-primary hover:bg-surface-alt'
                        }`}
                      aria-label={isVideoOff ? 'Turn on camera' : 'Turn off camera'}
                    >
                      {isVideoOff ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>

                    {/* End call button */}
                    <button
                      onClick={endCall}
                      className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                      aria-label="End call"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
