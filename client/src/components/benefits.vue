<template lang="html">
  <article>
    <h1>The Benefits of yoga.</h1>

    <button class="accordion"> Improve hip movement</button>
    <div class="panel">
      <p>Hip hinge movement is the pattern
        of flexion and extension throughout
        the hip joint. Especially important for
        runners, hikers and people who enjoy kettle
        bell workouts, proper hip hinge movement lessens
        the chance of athletic injury by decreasing
        stress on the joint. Because yoga places such
        a stringent focus on knee, ankle, hip and sacrum
        alignment during static poses, it helps to strengthen
        and loosen the hip joints while also promoting healthy hip
        hinge movement that carries over into many activities.</p>
      </div>

      <button class="accordion"> Improves bones and Muscles</button>
      <div class="panel">
        <p>Practicing yoga on a regular basis improves the health
          of your bones while strengthening your spine and muscles.
          It also works the tendons and ligaments, making them less
          susceptible to breakdown. And, of course, yoga improves your
          flexibility. These yoga benefits work together to protect your
          body from injury.</p>
        </div>

        <button class="accordion"> Protects your spine</button>
        <div class="panel">
          <p> Spinal disks—the shock
            absorbers between the vertebrae that can herniate and compress nerves—crave
            movement. That's the only way they get their nutrients. If you've got a
            well-balanced asana practice with plenty of backbends, forward bends, and twists,
            you'll help keep your disks supple.</p>
          </div>

          <button class="accordion"> Well being</button>
          <div class="panel">
            <p>Like many other physical activities, Yoga also helps with mental
              health and well being. Keeping active is one of the key ingredints for having
              a postive mind set and helping with depression.</p>
            </div>
          </article>
      </template>

        <script>
        export default {
          name: 'yoga-benefits',
          mounted() {
            const acc = document.getElementsByClassName("accordion");
            let i;

            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {

                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                  panel.style.display = "none";
                } else {
                  panel.style.display = "block";
                }
              });
            }
          }

        }
        </script>

        <style lang="css" scoped>
          .accordion {
            background-color: #eee;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
            transition: 0.4s;
          }

          .active, .accordion:hover {
            background-color: #ccc;
          }

          .panel {
            padding: 0 18px;
            display: none;
            background-color: white;
            overflow: hidden;
          }
        </style>
