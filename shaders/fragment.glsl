// uniform float uTime;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

void main() { 
    float blocks = 18.0; //block divison
    vec2 blockUv = floor(vUv*blocks)/blocks;
    vec2 mouse = uMouse;
    float distance = length(blockUv - mouse);
    float effect = smoothstep(0.35,0.0,distance);//effect range
    vec2 distortion = vec2(0.06) * effect;
    vec4 color = texture2D(uTexture, vUv + (distortion * uHover));
    gl_FragColor = color;
}
