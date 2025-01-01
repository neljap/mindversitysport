/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroimgone': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421427/z5fkks4voa5nr7jz7jgr.jpg')",
        'heroimgtwo': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421428/vsabiecrt4fvptwbrgk4.jpg')",
        'heroimgthree': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421428/j1eld5jbv2vdbrmlsifm.jpg')",
      },
      colors: {
        primary: "#d21334",
        inpcolor: "#0000004d"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

