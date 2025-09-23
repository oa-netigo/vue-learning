import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const value = ref(defaultValue)

  // Initialisierung: Wert aus localStorage laden
  const storedValue = localStorage.getItem(key)
  if (storedValue !== null) {
    try {
      value.value = JSON.parse(storedValue)
    } catch (error) {
      console.error('Error parsing localStorage value:', error)
      value.value = defaultValue
    }
  }

  // Watcher: Bei Änderungen in localStorage speichern
  watch(
    value,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true }
  )

  const setValue = (newValue) => {
    value.value = newValue
  }

  const clear = () => {
    value.value = defaultValue
    localStorage.removeItem(key)
  }

  return {
    value,
    setValue,
    clear
  }
}