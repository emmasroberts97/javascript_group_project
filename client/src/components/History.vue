<template lang="html">
  <article>
    <h1>History of Yoga</h1>
    <div name="paragraph1">
      Yoga’s history has many places of obscurity and uncertainty due to its oral transmission of sacred texts and the secretive nature of its teachings. The early writings on yoga were transcribed on fragile palm leaves that were easily damaged, destroyed or lost. The development of yoga can be traced back to over 5,000 years ago, but some researchers think that yoga may be up to 10,000 years old old. Yoga’s long rich history can be divided into four main periods of innovation, practice and development.
    </div>


    <button class="accordion"> Pre-Classical Yoga &darr;</button>
    <div class="panel">
      <p id="float-right">The beginnings of Yoga were developed by the Indus-Sarasvati civilization in Northern India over 5,000 years ago. The word yoga was first mentioned in the oldest sacred texts, the Rig Veda. The Vedas were a collection of texts containing songs, mantras and rituals to be used by Brahmans, the Vedic priests. Yoga was slowly refined and developed by the Brahmans and Rishis (mystic seers) who documented their practices and beliefs in the Upanishads, a huge work containing over 200 scriptures. The most renowned of the Yogic scriptures is the Bhagavad-Gîtâ, composed around 500 B.C.E. The Upanishads took the idea of ritual sacrifice from the Vedas and internalized it, teaching the sacrifice of the ego through self-knowledge, action (karma yoga) and wisdom (jnana yoga).</p>
      <img src="https://www.yogapoint.com/images-new/yoga-history-img3.jpg" alt="ancient yoga inscription" class="img1">
    </div>

    <button class="accordion">Classical Yoga &darr;</button>
    <div class="panel">
      <p id="float-left">In the pre-classical stage, yoga was a mishmash of various ideas, beliefs and techniques that often conflicted and contradicted each other. The Classical period is defined by Patanjali’s Yoga-Sûtras, the first systematic presentation of yoga. Written some time in the second century, this text describes the path of Raja Yoga, often called "classical yoga". Patanjali organized the practice of yoga into an "eight limbed path" containing the steps and stages towards obtaining Samadhi or enlightenment. Patanjali is often considered the father of yoga and his Yoga-Sûtras still strongly influence most styles of modern yoga.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Patanjali_Statue.jpg" alt="A statue of Patanjali" class="img2">
    </div>

    <button class="accordion"> Post-Classical Yoga &darr;</button>
    <div class="panel">
      <p id="float-right">A few centuries after Patanjali, yoga masters created a system of practices designed to rejuvenate the body and prolong life. They rejected the teachings of the ancient Vedas and embraced the physical body as the means to achieve enlightenment. They developed Tantra Yoga, with radical techniques to cleanse the body and mind to break the knots that bind us to our physical existence. This exploration of these physical-spiritual connections and body centered practices led to the creation of what we primarily think of yoga in the West: Hatha Yoga.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Female_Ascetics_%28Yoginis%29_LACMA_M.2011.156.4_%281_of_2%29.jpg/1024px-Female_Ascetics_%28Yoginis%29_LACMA_M.2011.156.4_%281_of_2%29.jpg" alt="18th Century Yogis practi yoga" class="img1">
    </div>

    <button class="accordion"> Modern Period &darr;</button>
    <div class="panel">
      <p>In the late 1800s and early 1900s, yoga masters began to travel to the West, attracting attention and followers. This began at the 1893 Parliament of Religions in Chicago, when Swami Vivekananda wowed the attendees with his lectures on yoga and the universality of the world’s religions. In the 1920s and 30s, Hatha Yoga was strongly promoted in India with the work of T. Krishnamacharya, Swami Sivananda and other yogis practicing Hatha Yoga. Krishnamacharya opened the first Hatha Yoga school in Mysore in 1924 and in 1936 Sivananda founded the Divine Life Society on the banks of the holy Ganges River. Krishnamacharya produced three students that would continue his legacy and increase the popularity of Hatha Yoga: B.K.S. Iyengar, T.K.V. Desikachar and Pattabhi Jois. Sivananda was a prolific author, writing over 200 books on yoga, and established nine ashrams and numerous yoga centers located around the world.</p>
      <p>The importation of yoga to the West still continued at a trickle until Indra Devi opened her yoga studio in Hollywood in 1947. Since then, many more western and Indian teachers have become pioneers, popularizing hatha yoga and gaining millions of followers. Hatha Yoga now has many different schools or styles, all emphasizing the many different aspects of the practice.</p>
    </div>

  </article>

</template>

<script>
export default {
  name: "history",
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
    width: 65%;
}

#float-left {
  float: left;
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
  /* background-color: #eee; */
}

.accordion {
  background-color: #FFFAF0;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  /* text-align: left; */
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
