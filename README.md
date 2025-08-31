# My Music Player 🎧

<a href="">Video of project on linkedin</a>
This is a sleek and modern music player app built with HTML, CSS, and JavaScript. It provides a simple, yet elegant interface for browsing and playing your favorite tunes. The design is inspired by popular streaming services, offering a clean layout and a great user experience.


---

## ✨ Features

* **Responsive Design:** The layout automatically adjusts to look great on any device, whether you're on a desktop, tablet, or mobile phone.
* **Dynamic Playlists:** Easily browse through different playlists, each with its own set of songs.
* **Intuitive Controls:** The player includes standard controls for playing, pausing, skipping to the next or previous song, and adjusting the volume.
* **Interactive Seek Bar:** You can click and drag the seek bar to jump to any part of a song.
* **Album Art and Song Info:** The player displays the current song's title and corresponding album art.

---

## 🛠️ Technologies Used

* **HTML5:** For the structural markup of the web pages.
* **CSS3:** To style the application, making it visually appealing and responsive.
* **JavaScript:** To handle all the dynamic functionality, including playing music, managing playlists, and updating the UI in real time.

---

## 🚀 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

You just need a modern web browser to view this project. There are no other dependencies.

### Installation

1.  Clone the repository:
    ```bash
    git clone [your-repository-url]
    ```
2.  Navigate to the project directory:
    ```bash
    cd [your-project-folder]
    ```
3.  Open the `index.html` file in your preferred web browser.

That's it! The music player will load and you can start exploring the playlists and playing songs.

---

## 📹 Project Demo Video

I've created a video that walks you through the features and functionality of this music player. You can watch the demo here:

[Place your video link here]

---

## 📝 How It Works

### The HTML Structure
The HTML is organized into two main sections: `left` and `right`. The **left** side contains the navigation—your library, home, and search options. The **right** side is the main content area, showcasing the playlists and the music player controls at the bottom.

### The CSS Styling
The CSS file (`style.css`) handles all the visual aspects. I used a combination of **Flexbox** for layout management and responsive design. Key styling includes:
* A dark theme for a modern look.
* Custom styling for the play buttons and cards.
* Hover effects to make the interface more interactive.
* Media queries to ensure the app is fully responsive on smaller screens.

### The JavaScript Logic
The `script.js` file is the brain of the application.
* **`getsongs()` function:** This asynchronous function fetches the songs from a specified folder on the server.
* **`playmusic()` function:** This function takes a song track as input, sets it as the audio source, and starts playing it. It also updates the song title and changes the play/pause icon.
* **Event Listeners:** I've added event listeners to handle user interactions like:
    * Clicking the play, previous, and next buttons.
    * Clicking on a song in the library to play it.
    * Clicking a playlist card to switch to a new playlist.
    * Clicking the seek bar to change the current time of the song.
    * Adjusting the volume.
    * Opening and closing the sidebar on mobile devices.

The **`currentsongindex`** variable plays a crucial role in tracking which song is currently playing, allowing the previous and next buttons to work correctly. The `audio.addEventListener('timeupdate', ...)` is particularly important as it continuously updates the position of the seek bar and the current time display as the song plays.

---

## 🤝 Contribution

Feel free to fork the repository and contribute! Any improvements, bug fixes, or new features are welcome.
