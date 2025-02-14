// // uniform float uTime;
// varying vec2 vUv;
// uniform sampler2D uTexture;
// uniform vec2 uMouse;
// uniform float uHover;

// void main() { 
//     float blocks = 18.0; //block divison
//     vec2 blockUv = floor(vUv*blocks)/blocks;
//     vec2 mouse = uMouse;
//     float distance = length(blockUv - mouse);
//     float effect = smoothstep(0.35,0.0,distance);//effect range
//     vec2 distortion = vec2(0.06) * effect;
//     vec4 color = texture2D(uTexture, vUv + (distortion * uHover));
//     gl_FragColor = color;
// }

// uniform float uTime;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

void main() { 
    float blocks = 18.0; // Block division for pixelation
    vec2 blockUv = floor(vUv * blocks) / blocks;
    vec2 mouse = uMouse;
    float distance = length(blockUv - mouse);
    float effect = smoothstep(0.35, 0.0, distance); // Effect range

    vec2 distortion = vec2(0.06) * effect;
    vec4 color = texture2D(uTexture, vUv + (distortion * uHover));

    // Convert to grayscale
    float gray = dot(color.rgb, vec3(0.3, 0.59, 0.11)); 
    vec3 grayColor = vec3(gray);

    // Interpolate between grayscale and original color
    vec3 finalColor = mix(grayColor, color.rgb, uHover);
    
    gl_FragColor = vec4(finalColor, color.a);
}
