<template lang="html">
  <article>
    <h1>The 8 Types of Yoga</h1>
    <button class="accordion"> Vinyasa</button>
    <div class="panel">
      <p>Vinyasa yoga is popular and is taught at most studios and gyms. “Vinyasa” means linking breath with movement. The postures are usually done in a flowing sequence, or "vinyasa flow." The fluid movements can be memorized and done as a moving meditation, almost like a dance.</p>

      <p>The popularity of this style of yoga comes from the sensual movements, pleasant music, usually (but not always) practiced in a dark room, or sometimes by candlelight and with the eyes closed.</p>
    </div>
    <button class="accordion">Ashtanga</button>
    <div class="panel">
      <p>Ashtanga means “eight limbs” and encompasses a yogic lifestyle. Most people identify Ashtanga as traditional Indian yoga. Like Vinyasa yoga, the Ashtanga yoga asanas (postures) synchronize breath with movement as you move through a series of postures.</p>

      <p>It was brought to the United States by Sri K. Pattabhi Jois in the early 20th century. The series of postures are practiced the same way every time and consist of Sun Salutation A, Sun Salutation B, a standing sequence, and a closing sequence. The practice is usually performed without music, and sometimes without verbal instruction (in silence).</p>
    </div>
    <button class="accordion">Iyengar</button>
    <div class="panel">
      <p>Also based on the Eight Limbs of Yoga, Iyengar yoga is named after B.K.S. Iyengar, a famous yogi from India. It was popularized in the West about the same time as Ashtanga yoga.</p>

      <p>The emphasis on this practice is alignment in the asanas using breath control through pranayama and the use of props (bolsters, blankets, blocks and straps.) This style of yoga is usually taught without music and at a slower pace designed to assist students to get deeper into the postures.</p>
    </div>
    <button class="accordion">Bikram</button>
    <div class="panel">
      <p>Bikram yoga was designed by Bikram Choudhury in the 1970s, who brought the practice to California from India.</p>

      <p>Class consists of the same twenty-six yoga postures and two breathing exercises. It is ninety minutes long and done in a room that is 105 degrees Fahrenheit with 40% humidity. The room is bright and the students face mirrors to check proper posture and alignment. There is no music during class.</p>
    </div>
    <button class="accordion">Jivamukti</button>
    <div class="panel">
      <p>Jivamukti was created in 1984 by Sharon Gannon and David Life in New York City. ivamukti translates to “liberated being.”</p>

      <p>Class incorporates Sanskrit chanting, Pranayama, and movement (Asanas), with a theme or lesson for each class. This is a good blend of spiritual and physical exercise.</p>
    </div>
    <button class="accordion"> Power Yoga</button>
    <div class="panel">
      <p>Power yoga is a more active approach to the traditional Hatha yoga poses. The Ashtanga yoga poses are performed more quickly and with added core exercises and upper body work.</p>

      <p>The sequences are not the same every time, and there is often upbeat music. Vinyasa yoga can also be Power yoga, depending on the gym or studio that is hosting the class.</p>
    </div>
    <button class="accordion">Sivananda</button>
    <div class="panel">
      <p>Sivananda yoga was brought to the United States by Swami Vishnudevananda in 1957. This is a yoga system based on the five yogic principals: proper breathing, relaxation, diet, exercise, and positive thinking. These work together to make a healthy yogic lifestyle.</p>

      <p>The asana practice is usually twelve basic postures or variations of the Asanas, with Sun Salutations and Savasana. There is no music..</p>
    </div>
    <button class="accordion">Yin</button>
    <div class="panel">
      <p>Yin yoga is a meditative practice that allows your body to become comfortable in a pose without doing any work (strength). It is also called Taoist yoga, and focuses on lengthening the connective tissues within the body. It is meant to compliment Yang yoga, or muscle-forming yoga practices.
      </p>

      <p>If Yang is active, then Yin is passive, meaning the muscles are allowed to relax with gravity and rest. This is usually performed with the assistance of props, and there is little or no music in class.</p>
    </div>

  </article>
</template>

<script>
export default {
  name: "yoga-types",
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



<!-- https://www.doyou.com/8-types-of-yoga-explained-16100/ -->
