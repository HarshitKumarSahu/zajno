// uniform float uTime;
varying vec2 vUv;
uniform sampler2D uTexture;

void main() { 
    float blocks = 20.0; //block divison
    vec2 blockUv = floor(vUv*blocks)/blocks;
    vec2 mouse = vec2(0.5 , 0.5);
    float distance = length(blockUv - mouse);
    float effect = smoothstep(0.4,0.0,distance);//effect range
    vec2 distortion = vec2(0.03) * effect;
    vec4 color = texture2D(uTexture, vUv + distortion);
    gl_FragColor = color;
}
