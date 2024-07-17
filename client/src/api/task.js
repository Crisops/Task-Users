export function getTasks (url) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}

export function createTask (url, data) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}

export function deleteTask (url) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}
