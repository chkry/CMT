
export const userService = {
    init,
};

function init() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch("v1/init", requestOptions).then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    });
  }
  