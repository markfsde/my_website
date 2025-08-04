---
title: 💟 Love blog with me and my bf
summary: 走很远的路 和你
date: 2025-08-02

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com)'

authors:
  - admin
  - Ted

tags:
  - Daily Life
  - Hugo Blox
  - Markdown
---

Welcome 👋

{{< toc mobile_only=true is_open=true >}}

## Overview

还没写

### 一起做的事

- [x] Write math example
  - [x] Write diagram example
- [ ] Do something else



### 恋爱编年表

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 35%;">
    <h3>主人也就是本人</h3>
    <p>生于2004年</p>
  </div>
  
  <!-- 动态爱心容器 -->
  <div id="heartContainer" style="width: 30%; display: flex; justify-content: flex-start; align-items: center; margin-left: 30px;">
  <canvas id="heartCanvas" width="360" height="360" style="width: 135px; height: 135px; border: none;"></canvas>
  </div>


  <div style="width: 35%;">
    <h3>小狗</h3>
    <p>生于2005年</p>
  </div>
</div>

<div style="border-left: 2px solid #ccc; padding-left: 20px; margin-left: 10px;">
  <!-- 时间轴条目 -->
  <div style="position: relative; margin-bottom: 30px;">
    <div style="position: absolute; left: -25px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: #ccc;"></div>
    <h4>2023-09</h4>
    <p>入学并在实验课上第一次见面</p>
  </div>

  <div style="position: relative; margin-bottom: 30px;">
    <div style="position: absolute; left: -25px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: #ccc;"></div>
    <h4>2024-10-17</h4>
    <p>半恋爱关系</p>
  </div>

  <div style="position: relative; margin-bottom: 30px;">
    <div style="position: absolute; left: -25px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: #ccc;"></div>
    <h4>2024-12</h4>
    <p>此狗终于爱上我</p>
  </div>
</div>

<script>
// 动态爱心高清跳动动画，适配 Retina、保持容器一致
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('heartCanvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');

  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;
  const dpr = window.devicePixelRatio || 1;

  // 设置高分辨率绘图（Retina 支持）
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const centerX = cssWidth / 2;
  const centerY = cssHeight / 2 + 1; // 轻微下移居中
  let t = 0;
  const baseScale = 1.25;  // 初始缩放，适配小尺寸
  const amplitude = 0.15;
  const speed = 2.8;

  function heartbeatEase(time) {
    const raw = Math.sin(time);
    return baseScale + amplitude * Math.pow(raw, 3);
  }

  function drawHeart(currentScale) {
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    // 光晕背景
    const glowRadius = 10 * currentScale;
    const gradient = ctx.createRadialGradient(
      centerX, centerY - 2, 0,
      centerX, centerY - 2, glowRadius
    );
    gradient.addColorStop(0, 'rgba(245,10,69,0.5)');
    gradient.addColorStop(1, 'rgba(245,10,69,0)');

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY - 2, 25 * currentScale * 0.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 主体心形
    ctx.fillStyle = '#ff4d6d';
    ctx.strokeStyle = '#c9184a';
    ctx.lineWidth = 1;
    ctx.shadowColor = 'rgba(201,24,74,0.7)';
    ctx.shadowBlur = 8 * currentScale;

    ctx.beginPath();
    const scaleFactor = 0.9 * currentScale; // 适配40x40展示效果
    for (let angle = 0; angle <= Math.PI * 2 + 0.01; angle += 0.02) {
      const x = 16 * Math.pow(Math.sin(angle), 3);
      const y = -(13 * Math.cos(angle)
                - 5 * Math.cos(2 * angle)
                - 2 * Math.cos(3 * angle)
                - Math.cos(4 * angle));
      const drawX = centerX + x * scaleFactor;
      const drawY = centerY + y * scaleFactor;
      if (angle === 0) {
        ctx.moveTo(drawX, drawY);
      } else {
        ctx.lineTo(drawX, drawY);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function animate() {
    t += 0.02 * speed;
    const currentScale = heartbeatEase(t);
    drawHeart(currentScale);
    requestAnimationFrame(animate);
  }

  animate();
});
</script>


### 在一起第？天了
<style>
  .day-counter-calendar {
    width: 280px;
    border: 4px solid #d6aefc; /* 边框粗细 + 淡紫色 */
    border-radius: 16px;
    padding: 16px;
    text-align: center;
    font-family: sans-serif;
    background-image: url('./bg.jpg'); /* ✅ 替换为你的照片链接 */
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    color: #fff;
    backdrop-filter: brightness(1.1) blur(2px);
  }

  .day-counter-calendar h2 {
    margin: 0;
    font-size: 1.5em;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .day-counter-calendar .date {
    font-size: 1.2em;
    margin: 8px 0;
    color: #f0f0f0;
  }

  .day-counter-calendar .days {
    font-size: 2.5em;
    font-weight: bold;
    color: #ff4444;
    text-shadow: 1px 1px 2px white;
  }
</style>

<div class="day-counter-calendar">
  <h2>我们在一起</h2>
  <div class="date" id="today-date">加载中…</div>
  <div class="days" id="days-count">第 0 天</div>
</div>

<script>
  const startDate = new Date("2025-04-27"); // 改为你的纪念日
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  document.getElementById("today-date").innerText = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`;
  document.getElementById("days-count").innerText = `第 ${diffDays} 天`;
</script>
