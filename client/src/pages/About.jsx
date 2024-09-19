import React from "react";

const About = () => {
  return (
    <div className="w-[90%] md:w-[60%] mt-[12vh] mx-auto mb-[10vh]">
      <h1 className="text-4xl text-center font-bold mb-8">About Git-Fit</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed">
          Every developer tries to save small code snippets in notesapp or some random app. It is very challenging task
          for every person to push that code to github. So here comes Git-Fit your all time code companion for small code snippets. <br></br>
          <br></br>
          <strong>Git-Fit</strong> is the perfect solution. Git-Fit is a web
          application designed specifically for developers to store, manage, and
          share small code snippets efficiently. It provides features that
          extend beyond simple storage, making it a versatile tool for
          developers needing quick access to reusable code without the overhead
          of more complex platforms like GitHub.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>
            <strong>JWT Authorization:</strong> Secure your sessions with JSON
            Web Tokens.
          </li>
          <li>
            <strong>OAuth 2.0:</strong> Login using Google or GitHub through
            Passport.js.
          </li>
          <li>
            <strong>Multi-language Support:</strong> Save snippets in multiple
            programming languages.
          </li>
          <li>
            <strong>Code Editor:</strong> Enjoy language-specific autocomplete
            suggestions.
          </li>
          <li>
            <strong>Image Downloads:</strong> Download beautiful images of your
            code snippets.
          </li>
          <li>
            <strong>Clipboard Copy:</strong> Copy your code snippets to the
            clipboard with one click.
          </li>
          <li>
            <strong>Pin Snippets:</strong> Pin your favorite snippets to see
            them first.
          </li>
          <li>
            <strong>Community Building:</strong> Follow other users and build
            your network.
          </li>
          <li>
            <strong>Explore Section:</strong> Post your thoughts and share them
            with the community.
          </li>
          <li>
            <strong>Star/Favourite:</strong> Star and favorite public snippets
            from other users.
          </li>
          <li>
            <strong>Rich Posts:</strong> Use images in your posts.
          </li>
          <li>
            <strong>Engagement:</strong> Upvote, downvote, and comment on posts.
          </li>
          <li>
            <strong>Chatroom:</strong>A Chatroom built using Websockets:
            designed with memory efficiency in mind and without the need for a
            database or browser caching for fast and efficient communication.
          </li>
          <li>
            <strong>Email Notifications:</strong> Get notified via email using
            Nodemailer.
          </li>
          <li>
            <strong>Tech News:</strong> Stay updated with the latest tech news.
          </li>
          <li>
            <strong>Tags:</strong> Add tags to your snippets and posts for
            better visibility.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>
            <strong>Frontend:</strong> React, Tailwind CSS, Bootstrap
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Authentication:</strong> JWT, Passport.js (OAuth 2.0)
          </li>
          <li>
            <strong>Email Service:</strong> Nodemailer
          </li>
          <li>
            <strong>Deployment:</strong> Vercel
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Architecture</h2>
        <p className="text-lg leading-relaxed">
          The backend follows a Model-View-Controller (MVC) architecture,
          ensuring a clean separation of concerns and better maintainability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">About the Developer</h2>
        <p className="text-lg leading-relaxed">
          Git-Fit is developed by <strong>Sagar Singh Raghav</strong>.
        </p>
        <div className="mt-4 space-y-2">
          <p className="text-lg">
            <strong>Connect with me:</strong>
          </p>
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/thesagarsingh/"
              className="text-blue-600 hover:underline"
            >
              Sagar Singh Raghav
            </a>{" "}
            (LinkedIn)
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
