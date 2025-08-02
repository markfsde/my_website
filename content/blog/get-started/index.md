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


### [❤️ Click here to become a sponsor and help support Hugo Blox's future ❤️](https://hugoblox.com/sponsor/)

As a token of appreciation for sponsoring, you can **unlock [these](https://hugoblox.com/sponsor/) awesome rewards and extra features 🦄✨**



## Inspiration

[Learn what other **creators**](https://hugoblox.com/creators/) are building with this template.

## Features

- **Page builder** - Create _anything_ with no-code [**blocks**](https://hugoblox.com/blocks/) and [**elements**](https://docs.hugoblox.com/reference/markdown/)
- **Edit any type of content** - Blog posts, publications, talks, slides, projects, and more!
- **Create content** in [**Markdown**](https://docs.hugoblox.com/reference/markdown/), [**Jupyter**](https://docs.hugoblox.com/getting-started/cms/), or [**RStudio**](https://docs.hugoblox.com/getting-started/cms/)
- **Plugin System** - Fully customizable [**color** and **font themes**](https://docs.hugoblox.com/getting-started/customize/)
- **Display Code and Math** - Code syntax highlighting and LaTeX math supported
- **Integrations** - [Google Analytics](https://analytics.google.com), [Disqus commenting](https://disqus.com), Maps, Contact Forms, and more!
- **Beautiful Site** - Simple and refreshing one-page design
- **Industry-Leading SEO** - Help get your website found on search engines and social media
- **Media Galleries** - Display your images and videos with captions in a customizable gallery
- **Mobile Friendly** - Look amazing on every screen with a mobile friendly version of your site
- **Multi-language** - 35+ language packs including English, 中文, and Português
- **Multi-user** - Each author gets their own profile page
- **Privacy Pack** - Assists with GDPR
- **Stand Out** - Bring your site to life with animation, parallax backgrounds, and scroll effects
- **One-Click Deployment** - No servers. No databases. Only files.

## Themes

Hugo Blox and its templates come with **automatic day (light) and night (dark) mode** built-in. Visitors can choose their preferred mode by clicking the sun/moon icon in the header.

[Choose a stunning **theme** and **font**](https://docs.hugoblox.com/getting-started/customize/) for your site. Themes are fully customizable.

## Time


<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 40%;">
    <h3>主人也就是本人</h3>
    <p>生于2004年</p>
  </div>
  
  <!-- 动态爱心容器 -->
  <div id="heartContainer" style="width: 20%; display: flex; justify-content: flex-start;margin-left: -15px;">
    <canvas id="heartCanvas" width="40" height="40" style="border: none;"></canvas>
  </div>

  <div style="width: 40%;">
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
// 爱心动画脚本
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('heartCanvas');
  const ctx = canvas.getContext('2d');
  
  let scale = 1;
  let growing = false;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 设置爱心颜色
    ctx.fillStyle = '#ff4d6d';
    ctx.strokeStyle = '#c9184a';
    ctx.lineWidth = 1;
    
    ctx.beginPath();

    // 使用参数方程绘制爱心
    for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
      const x = 16 * Math.pow(Math.sin(angle), 3);
      const y = -(13 * Math.cos(angle) - 5 * Math.cos(2*angle) - 2 * Math.cos(3*angle) - Math.cos(4*angle));
      
      ctx.lineTo(
        centerX + x * scale * 0.2,  // 缩小比例适应canvas大小
        centerY + y * scale * 0.2
      );
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // 添加动画效果
    if (growing) {
      scale += 0.02;
      if (scale >= 1.3) growing = false;
    } else {
      scale -= 0.02;
      if (scale <= 0.7) growing = true;
    }
    
    requestAnimationFrame(drawHeart);
  }
  
  drawHeart();
});
</script>