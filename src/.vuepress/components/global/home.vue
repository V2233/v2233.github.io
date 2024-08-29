<template>
    <div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      strs: [
        {
          title: '全新聊天机器人开发管理系统',
          // 停顿的位置
          stop: 5,
          // stop: [4, 13] // 可以是数组，多几个位置停顿
        },
        {
          title: '集开发、测试、管理、配置于一体',
        },
        {
          title: '妈妈再也不用担心我不会玩云崽啦',
        }
      ],
      // 当前进行到第几行
      currentIndex: 0,
      spans: null,
      el: null,
      titleEl: null,
      //星星特效
      starBg: null
    }
  },
  mounted() {
    if (!this.el) {
      const timer = setInterval(() => {
        this.el = document.querySelector('.vp-hero-infos #main-description')
        this.titleEl = document.querySelector('.vp-hero-infos  h1')
        if (this.el) {
          this.titleEl.style.fontWeight = 'bold'
          timer && clearInterval(timer)
          this.init()
        }
      }, 100)
    } else {
      this.init()
    }
    
    //添加星星
    this.starBg = document.querySelector('.vp-hero-info-wrapper')
    let starHtml = '<div class="space">' +  
                      '<div class="stars">' +  
                        '<div class="star "></div>' +  
                        '<div class="star pink "></div>' +  
                        '<div class="star blue "></div>' +  
                        '<div class="star yellow "></div>' +  
                      '</div>' +  
                    '</div>'; 
    if(this.starBg) {
      this.starBg.insertAdjacentHTML('beforeend', starHtml); 
    }
  },
  methods: {
    init() {
      if (this.currentIndex == this.strs.length) {
        this.currentIndex = 0
      }
      const current = this.strs[this.currentIndex]
      this.el.innerHTML = current instanceof Object ? current.title : current
      this.el.innerHTML = this.el.textContent.replace(/\S/g, '<span>$&</span>')

      let delay = 0
      this.spans = [...document.querySelectorAll('.vp-hero-infos #main-description span')]
      this.spans.forEach((span, i) => {
        delay += 0.1
        if (current.hasOwnProperty('stop')) {
          if (current.stop instanceof Array) {
            if (current.stop.includes(i)) {
              delay += 0.3
            }
          } else {
            if (current.stop == i) {
              delay += 0.3
            }
          }
        }

        span.style.setProperty('--delay', `${delay}s`)
      })

      this.el.addEventListener('animationend', this.lastEnd)
      
    },

    lastEnd(e) {
      if (e.target == document.querySelector('.vp-hero-infos #main-description span:last-child')) {
        this.el.classList.add('ended')
        setTimeout(() => {
          this.el.removeEventListener('animationend', this.lastEnd)
          let delay = 0

          this.spans.reverse().forEach((span, i) => {
            this.el.classList.remove('ended')
            span.style.width = '2ch'
            span.style.animation = '0.1s text-out ease-in-out forwards'
            delay += 0.05

            // 回去停顿功能
            // if (this.strs[this.currentIndex].hasOwnProperty("stop")) {
            //   if (this.strs[this.currentIndex].stop instanceof Array) {
            //     if (
            //       this.strs[this.currentIndex].stop.includes(
            //         this.spans.length - i
            //       )
            //     ) {
            //       delay += 0.3;
            //     }
            //   } else {
            //     if (
            //       this.strs[this.currentIndex].stop ==
            //       this.spans.length - i
            //     ) {
            //       delay += 0.3;
            //     }
            //   }
            // }

            span.style.animationDelay = `${delay}s`
          })
          this.el.addEventListener('animationend', this.firstEnd)
        }, 1500)
      }
    },

    firstEnd(e) {
      if (e.target == document.querySelector('.vp-hero-infos #main-description span:first-child')) {
        this.spans.forEach(v => {
          v.remove()
        })
        this.el.removeEventListener('animationend', this.firstEnd)
        this.currentIndex++
        this.init()
      }
    },
  },
}
</script>

<style>
    .vp-hero-infos {
      position: relative;
      display: grid;  
      justify-items: center;
    }
    
    .vp-hero-infos #main-description {
      margin: 0;
      margin-top: 0.5rem;
      padding: 0;
      /* 必须是等宽字体 */
      /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
      font-family: monospace;
      position: relative;
      width: fit-content;
    }
    
    .vp-hero-infos #main-description::after {
      content: '';
      display: inline;
      position: absolute;
      width: 2px;
      height: 2ch;
      top: 9%;
      background-color: #000;
      border-radius: 2px;
      right: -0.5ch;
    }
    
    .vp-hero-infos #main-description.ended::after {
      animation: 1.1s cursor steps(2, jump-none) infinite;
    }
    
    .vp-hero-infos #main-description span {
      --delay: 10s;
      display: inline-block;
      overflow: hidden;
      width: 0ch;
      animation: 0.1s text-in ease-in-out forwards;
      animation-delay: var(--delay);
      font-weight: 600;
    }
    
    @keyframes text-in {
      from {
        width: 0ch;
      }
      to {
        /* 必须是等宽字体 */
        /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
        /* 中文2ch，英文1ch */
        width: 2ch;
      }
    }
    
    @keyframes text-out {
      from {
        /* 中文2ch，英文1ch */
        width: 2ch;
      }
    
      to {
        width: 0ch;
      }
    }
    
    @keyframes cursor {
      from {
        opacity: 0;
      }
    
      to {
        opacity: 1;
      }
    }

/*顶部流星*/
    .vp-hero-info-wrapper {
        position: relative;
        max-width: 100%;
        overflow: hidden;
        /*border: 10px solid red;*/
    }
	.vp-hero-info-wrapper .space {
	  width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
	}
	
	.vp-hero-info-wrapper .star {
		display: block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #FFF;
		top: 100px;
		left: 40%;
		position: relative;
		transform-origin: 100% 0;
		animation: star-ani 6s infinite ease-out;
		box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
		opacity: 0;
		z-index: 2;
	}
	
	.vp-hero-info-wrapper .star:after {
		content: '';
		display: block;
		top: 0px;
		left: 4px;
		border: 0px solid #fff;
		border-width: 0px 90px 3px 90px;
		border-color: transparent transparent transparent rgba(255, 255, 255, .3);
		transform: rotate(-45deg) translate3d(1px, 3px, 0);
		box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
		transform-origin: 0% 100%;
		animation: shooting-ani 3s infinite ease-out;
	}
	
	.vp-hero-info-wrapper .pink {
		top: 30px;
		left: 60%;
		background: #ff5a99;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}
	
	.vp-hero-info-wrapper .pink:after {
		border-color: transparent transparent transparent #ff5a99;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}
	
	.vp-hero-info-wrapper .blue {
		top: 35px;
		left: 80%;
		background: cyan;
		animation-delay: 7s;
		-webkit-animation-delay: 7s;
		-moz-animation-delay: 7s;
	}
	
	.vp-hero-info-wrapper .blue:after {
		/* border-color: transpareanimation-delay: 12s; */
		-webkit-animation-delay: 7s;
		-moz-animation-delay: 7s;
		animation-delay: 7s;
	}
	
	.vp-hero-info-wrapper .yellow {
		top: 25px;
		left: 90%;
		background: #ffcd5c;
		animation-delay: 5.8s;
	}
	
	.vp-hero-info-wrapper .yellow:after {
		border-color: transparent transparent transparent #ffcd5c;
		animation-delay: 5.8s;
	}
	
	@keyframes star-ani {
		0% {
			opacity: 0;
			transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
		}
	
		50% {
			opacity: 1;
			transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
		}
	
		100% {
			opacity: 0;
			transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
		}
	}
</style>
