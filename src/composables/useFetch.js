import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const execute = async (url) => {
    loading.value = true
    error.value = null
    data.value = null

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()

      // Für randomuser.me API - extrahiere das erste Ergebnis
      if (result.results && result.results.length > 0) {
        data.value = result.results[0]
      } else {
        data.value = result
      }
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    execute
  }
}