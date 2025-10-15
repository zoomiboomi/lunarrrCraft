package com.lunarrrcraft.engine;

import org.lwjgl.glfw.GLFW;
import org.lwjgl.glfw.GLFWKeyCallback;

public class InputHandler {

    private long window;
    private boolean[] keys = new boolean[GLFW.GLFW_KEY_LAST];

    private GLFWKeyCallback keyCallback;

    public InputHandler(long window) {
        this.window = window;

        keyCallback = new GLFWKeyCallback() {
            @Override
            public void invoke(long windowHandle, int key, int scancode, int action, int mods) {
                if (key >= 0 && key < keys.length) {
                    keys[key] = action != GLFW.GLFW_RELEASE;
                }
            }
        };

        GLFW.glfwSetKeyCallback(window, keyCallback);
    }

    public boolean isKeyDown(int keyCode) {
        if (keyCode < 0 || keyCode >= keys.length) return false;
        return keys[keyCode];
    }

    public void cleanup() {
        keyCallback.free();
    }
}
