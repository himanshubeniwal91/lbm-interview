lbm company interveiw task 

in this project first i make header footer then main page 
in layout i put header and footer that is show on every page 

then on main page of this application ie app/page.tsx i import all the 7 components   

contactus.tsx
feature.tsx
HeroSection.tsx
HowitworksSections.tsx
join CommunitySection.tsx
PriceSection.tsx
UseFulsecton.tsx

in public/images folder i add all the images used in this project 
i import according to my need on differnt component 
____________________________________________________________________________
my folder structure 

app
----about---page.tsx
----contactus---page.tsx
----features---page.tsx
----howit work---page.tsx
----knowmore---page.tsx
----login---page.tsx
----pricing---page.tsx
      basic---page.tsx
      pro--page.tsx
     premium--page.tsx


component--home   --footer.tsx   and header.tsx 


public/images----all the images i use in this project 


____________________________________________________________
working of component 

like in every component where things are repeated i make on array and put informations in object 

that in jsx i fetch with   Array.map method  


example 
Features.tsx component
const features = [
  {
    title: "Seamless Integration",
    text: "Our Marketing Making Bot is compatible with popular decentralized exchanges, enabling easy integration for your token.",
    img: "/images/seamless.png",
  },......................................................

retunrn {
features.map(()=>.........................)}
____________________________________________________________
for button and links in header and footer i use 
<Link href="/..."><Link/>   element
____________________________________________________

