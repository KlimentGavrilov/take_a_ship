class Stage {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }
}

class GameObject {
    constructor(x, y, width, height, imageSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        if (imageSrc) {
            this.image.src = imageSrc;
        }
        this.imageLoaded = false;
        this.image.onload = () => {
            this.imageLoaded = true;
            
            if (!this.width || !this.height) {
                this.width = this.image.naturalWidth;
                this.height = this.image.naturalHeight;
            }
        };
    }

    draw(context) {
        if (this.imageLoaded) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

class Player extends GameObject {
    constructor(x, y, width, height, imageSrc) {
        super(x, y, width, height, imageSrc);
        this.speed = 5;
    }

    move(direction, stage) {
        switch (direction) {
            case 'up':
                if (this.y - this.speed >= 0) {
                    this.y -= this.speed;
                }
                break;
            case 'down':
                if (this.y + this.height + this.speed <= stage.height) {
                    this.y += this.speed;
                }
                break;
            case 'left':
                if (this.x - this.speed >= 0) {
                    this.x -= this.speed;
                }
                break;
            case 'right':
                if (this.x + this.width + this.speed <= stage.width) {
                    this.x += this.speed;
                }
                break;
        }
    }
}