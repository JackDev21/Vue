import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted } from 'vue'
import Hls from 'hls.js'

export function useHeroVideo(videoRef: Ref<HTMLVideoElement | null>, heroVideoUrl: string) {
  let hlsInstance: Hls | null = null

  onMounted(() => {
    const video = videoRef.value

    if (!video) {
      return
    }

    if (Hls.isSupported()) {
      hlsInstance = new Hls()
      hlsInstance.loadSource(heroVideoUrl)
      hlsInstance.attachMedia(video)
      return
    }

    video.src = heroVideoUrl
  })

  onBeforeUnmount(() => {
    hlsInstance?.destroy()
  })
}
