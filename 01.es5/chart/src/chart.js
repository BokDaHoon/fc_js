function Chart(containerId, config) {
    this.containerEl = document.getElementById(containerId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.containerEl.appendChild(this.canvas);

    if (!config.options) config.options = {};
    this.options = {
        width: config.options.width || 200,
        height: config.options.height || 200
    }

    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;
}

Chart.prototype.drawRect = 
    function(x, y, width, height, opts) {
        if (!opts) opts = {};
        this.ctx.beginPath();
        this.ctx.lineWidth = opts.lineWidth;
        this.ctx.strokeStyle = opts.strokeStyle;
        this.ctx.borderColor = opts.borderColor;
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
        if(opts.backgroundColor) {
            this.ctx.fillStyle = opts.backgroundColor;
            this.ctx.fillRect(x, y, width, height);
        }
    }

    Chart.prototype.drawText =
        function(text, x, y, options) {
            if(!options) options = {};
            this.ctx.font = options.font;
            this.ctx.textAlign = options.textAlign 
                || 'center';
            this.ctx.fillStyle = options.fillStyle
                || '#000000';
            this.ctx.fillText(text, x, y);     
        }

    function BarChart(ctx, config) {
        Chart.call(this, ctx, config);
    }

    // BarChart.prototype = Object.create(Chart.prototype);





