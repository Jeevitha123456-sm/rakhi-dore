HAPPY RAKSHA BANDHAN — DHORE & JEEVITHA
=========================================

WHAT THIS IS
------------
A single-page gift website with:
  1. A hero welcome with your names
  2. A photo gallery ("Our Story")
  3. An interactive "This or That" sibling quiz (15 questions)
  4. A personal letter section
  5. A set of "Rakhi promises"
  6. An interactive "Tie the Rakhi" button with a confetti animation

HOW TO OPEN IT
---------------
Unzip the folder, then double-click "index.html".
It opens directly in any browser (Chrome, Edge, Safari, Firefox) —
no installation or internet connection needed, except for the
decorative fonts, which load online if you're connected (the site
still looks good without them, using a system font fallback).

HOW TO ADD YOUR OWN PHOTOS (2 minutes)
----------------------------------------
Inside the "photos" folder you'll find 6 placeholder images:
  - photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg  -> the gallery grid
  - brother.jpg                                      -> Dhore's avatar in the quiz
  - sister.jpg                                        -> Jeevitha's avatar in the quiz

To use your own pictures:
  1. Pick 6 photos you like.
  2. Rename them to match the filenames above exactly
     (keep the .jpg ending — if your photo is a .png or .jpeg,
     just keep that extension and update the matching "src"
     in index.html, e.g. src="photos/photo1.png").
  3. Drop them into the "photos" folder, replacing the placeholders.
  4. Refresh index.html in your browser — done!

For best results, use roughly square photos for brother.jpg and
sister.jpg, and landscape/portrait photos (not too small) for the
four gallery photos.

HOW TO CHANGE THE NAMES
-------------------------
The names "Dhore" and "Jeevitha" appear in two places:
  1. index.html — search for "Dhore" and "Jeevitha" and edit the text.
  2. js/script.js — right at the very top:
         const BROTHER_NAME = "Dhore";
         const SISTER_NAME  = "Jeevitha";
     Changing these two lines automatically updates the quiz.

HOW TO EDIT THE LETTER OR QUESTIONS
--------------------------------------
- The letter text lives in index.html inside the section
  <section class="letter" id="letter"> — edit the paragraphs directly.
- The 15 quiz questions live in js/script.js inside the QUESTIONS
  array near the top of the file. Each entry looks like:
      { q: "Who steals food off the other's plate?",
        a: "Guilty, repeatedly",
        b: "Only when hungry (always)" }
  "a" is Dhore's punchline, "b" is Jeevitha's — feel free to
  add, remove, or rewrite any of them.

FILE STRUCTURE
---------------
index.html        -> the page structure and content
css/style.css      -> all colours, fonts, and layout
js/script.js       -> the quiz logic, scroll effects, and confetti
photos/            -> replace these with your own pictures

Happy Raksha Bandhan! 🪢
