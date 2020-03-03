<template lang="html">
  <article>
    <h1>The Benefits of Yoga</h1>

    <button class="accordion"> Improve Hip Movement</button>
    <div class="panel">
      <p id="float-right">Hip hinge movement is the pattern
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
        <img src="https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo.jpg" alt="Warrior Three Pose" class="img1">
      </div>

      <button class="accordion"> Improves Bones and Muscles</button>
      <div class="panel">
        <p id="float-left">Practicing yoga on a regular basis improves the health
          of your bones while strengthening your spine and muscles.
          It also works the tendons and ligaments, making them less
          susceptible to breakdown. And, of course, yoga improves your
          flexibility. These yoga benefits work together to protect your
          body from injury.</p>
          <img src="https://cdn.shopify.com/s/files/1/0032/7539/1011/articles/Yoga_How-to-Do-Crow-Pose-in-Yoga_01_300x208_dcbae444-0532-4a21-a8cb-6923d1830776_600x.jpg?v=1558424650" alt="Crow Position" class="img2">
        </div>

        <button class="accordion"> Protects Your Spine</button>
        <div class="panel">
          <p id="float-right"> Spinal disks—the shock
            absorbers between the vertebrae that can herniate and compress nerves—crave
            movement. That's the only way they get their nutrients. If you've got a
            well-balanced asana practice with plenty of backbends, forward bends, and twists,
            you'll help keep your disks supple.</p>
            <img src="https://www.yogajournal.com/.image/t_share/MTQ3MTU3MTIzNjI3NzU0OTU4/3hp_288_07_bjk2.jpg" alt="Crescent Lunge Position" class="img1">
          </div>

          <button class="accordion"> Well Being</button>
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

          #float-right {
            float: right;
          }

          #float-left {
            float: left;
          }

          p{
            width: 65%;
          }

          .img1 {
            float: left;
            width: 30%;
            display: inline-flex;
          }

          .img2 {
            float: right;
            width: 30%;
            display: inline-flex;
          }

          article{
            text-align: center;
            margin-top: auto;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            height: 100%;
          }


          .accordion {
            background-color: #FFFAF0;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;

            outline: none;
            font-size: 15px;
            transition: 0.4s;
          }

          .active, .accordion:hover {
            background-color: #FFB6C1;
          }

          .panel {
            padding: 0 18px;
            display: none;
            background-color: #FFF0F5;
            overflow: hidden;
          }
        </style>
