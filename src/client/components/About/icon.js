class Icon {
  constructor(x, y, dy, dx) {
    this.x = x;
    this.y = y;

    this.size = 50;
    this.dx = dx;
    this.dy = dy;
  }

  draw(ctx, image) {
    ctx.drawImage(image, this.x, this.y, this.size, this.size);
  }

  moveIcon(canvas) {
    this.x += this.dx;
    this.y += this.dy;

    // Wall collision(right/left)
    if (this.x + this.size > canvas.width - 5 || this.x < 0) {
      this.dx *= -1;
    }

    // Wall collision (top/bottom)
    if (this.y + this.size > canvas.height || this.y < 0) {
      this.dy *= -1;
    }
  }
}

export default Icon;
