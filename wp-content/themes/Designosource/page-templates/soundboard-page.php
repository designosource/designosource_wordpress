<?php
   /* Template name: Soundboard */

   get_header();
?>

  <div class="grid soundboard__grid">

            <div class="soundboard__grid__row__title-container">
              <div>
                <span class="soundboard__grid__row__title--first">Het</span>
                <span class="soundboard__grid__row__title--second">Designo</span>
                <span class="soundboard__grid__row__title--third">Soundboard</span>
              </div>
            </div>

    <?php $count = 1; ?>
    <?php if( have_rows('quotes') ): ?>

      <?php while( have_rows('quotes') ): the_row();  ?>

        <?php if($count <= 5): ?>

          <?php if($count == 1): ?>
            <div class="soundboard__grid__row">
          <?php endif; ?>
          
          <div class="soundboard__grid__row__col" style="background-image: url(<?php the_sub_field("image"); ?>)" data-audio-mp3="<?php the_sub_field("sound_mp3"); ?>">
            <span class="soundboard__grid__row__col__title"><?php the_sub_field("text"); ?></span>
            <div class="soundboard__grid__row__col__overlay"></div>
          </div>

          <?php if($count == 5): ?>
            </div>
          <?php endif; ?>

        <?php elseif($count >= 6 && $count <= 7): ?>
          <?php if($count == 6): ?>
            <div class="soundboard__grid__row">
          <?php endif; ?>

          <div class="soundboard__grid__row__col" style="background-image: url(<?php the_sub_field("image"); ?>)" data-audio-mp3="<?php the_sub_field("sound_mp3"); ?>">
            <span class="soundboard__grid__row__col__title"><?php the_sub_field("text"); ?></span>
            <div class="soundboard__grid__row__col__overlay"></div>
          </div>

          <?php if($count == 7): ?>
            </div>
          <?php endif; ?>

        <?php else: ?>

          <?php if($count == 8): ?>
            <div class="soundboard__grid__row">
          <?php endif; ?>
          <div class="soundboard__grid__row__col" style="background-image: url(<?php the_sub_field("image"); ?>)" data-audio-mp3="<?php the_sub_field("sound_mp3"); ?>">
            <span class="soundboard__grid__row__col__title"><?php the_sub_field("text"); ?></span>
            <div class="soundboard__grid__row__col__overlay"></div>
          </div>

          <?php if($count == 12): ?>
            </div>
          <?php endif; ?>

        <?php endif; ?>

        <?php $count++; ?>

      <?php endwhile; ?>

    <?php endif; ?>

  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min.js"></script>
  <script>
    TweenMax.to($(".soundboard__grid__row__title-container"), 0.1, {css: {boxShadow: "0px 0px 72px 0px rgba(0,0,0,0.5)"}, delay: 1});

    var delay = 1.5;
    $( ".soundboard__grid__row__col" ).each(function( index ) {

      TweenMax.to($(this), 0.2, {scale: 1, delay: delay});
      delay += 0.2;

    });
    
var sound = false;

    $(".soundboard__grid__row__col").click(function(e){

      var file = $(this).attr("data-audio-mp3");
   
      if(!sound){
        sound = new Audio(file);
      }
      sound.play();

    });

    $("audio").on("ended", function() {
    console.log("All Done!");
});
  </script>

<?php get_footer(); ?>