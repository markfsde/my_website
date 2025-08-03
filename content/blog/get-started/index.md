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
  - Academic
  - Hugo Blox
  - Markdown
---

Welcome 👋

{{< toc mobile_only=true is_open=true >}}

## Overview

1. The Hugo Blox website builder for Hugo, along with its starter templates, is designed for professional creators, educators, and teams/organizations - although it can be used to create any kind of site
2. The template can be modified and customised to suit your needs. It's a good platform for anyone looking to take control of their data and online identity whilst having the convenience to start off with a **no-code solution (write in Markdown and customize with YAML parameters)** and having **flexibility to later add even deeper personalization with HTML and CSS**
3. You can work with all your favourite tools and apps with hundreds of plugins and integrations to speed up your workflows, interact with your readers, and much more

[//]: # ([![The template is mobile first with a responsive design to ensure that your site looks stunning on every device.]&#40;https://raw.githubusercontent.com/wowchemy/wowchemy-hugo-modules/main/starters/academic/preview.png&#41;]&#40;https://hugoblox.com&#41;)

### Get Started

- 👉 [**Create a new site**](https://hugoblox.com/templates/)
- 📚 [**Personalize your site**](https://docs.hugoblox.com/)
- 💬 [Chat with the **Hugo Blox community**](https://discord.gg/z8wNYzb) or [**Hugo community**](https://discourse.gohugo.io)
- 🐦 Twitter: [@GetResearchDev](https://twitter.com/GetResearchDev) [@GeorgeCushen](https://twitter.com/GeorgeCushen) #MadeWithHugoBlox
- 💡 [Request a **feature** or report a **bug** for _Hugo Blox_](https://github.com/HugoBlox/hugo-blox-builder/issues)
- ⬆️ **Updating Hugo Blox?** View the [Update Guide](https://docs.hugoblox.com/reference/update/) and [Release Notes](https://github.com/HugoBlox/hugo-blox-builder/releases)



## Time


<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 35%;">
    <h3>主人也就是本人</h3>
    <p>生于2004年</p>
  </div>
  
  <!-- 动态爱心容器 -->
  <div id="heartContainer" style="width: 30%; display: flex; justify-content: flex-start;margin-left: -20px;">
    <canvas id="heartCanvas" width="80" height="80" style="border: none;"></canvas>
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
// 爱心动画脚本（替换原始版本，保持小 canvas 形式，增强心跳平滑度与高 DPI 支持）
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('heartCanvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');

  // 高 DPI 处理：按实际 CSS 尺寸调整内部像素，以保证在 Retina 上清晰
  function adjustDPR() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // 让后续绘制按 CSS 尺寸
  }
  window.addEventListener('resize', adjustDPR);
  adjustDPR();

  // 心跳参数
  let t = 0;
  const baseScale = 0.8; // 让整体在 40x40 里稍微有边距
  const amplitude = 0.15; // 心跳幅度
  const speed = 2.8; // 心跳速度

  // 缓动心跳（立体尖峰效果）
  function heartbeatEase(time) {
    const raw = Math.sin(time);
    return baseScale + amplitude * Math.pow(raw, 3);
  }

  // 画心形
  function drawHeart(currentScale) {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const centerX = w / 2;
    const centerY = h / 2 + 1; // 轻微下移视觉居中

    ctx.clearRect(0, 0, w, h);

    // 背后微光（小范围光晕增强质感）
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

    // 心形主体
    ctx.fillStyle = '#ff4d6d';
    ctx.strokeStyle = '#c9184a';
    ctx.lineWidth = 1;
    ctx.shadowColor = 'rgba(201,24,74,0.7)';
    ctx.shadowBlur = 8 * currentScale;

    ctx.beginPath();
    const scaleFactor = 0.2 * currentScale; // 与原来类似的缩放比例
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

