package com.lunarrrcraft.engine;

import org.lwjgl.opengl.GL11;

public class MainGameLoop {

    private DisplayManager displayManager;

    public void start() {
        displayManager = new DisplayManager();
        displayManager.createDisplay(1280, 720, "LunarrrCraft");

        while (!displayManager.shouldClose()) {
            GL11.glClear(GL11.GL_COLOR_BUFFER_BIT | GL11.GL_DEPTH_BUFFER_BIT);

            // TODO: Add rendering and input handling here

            displayManager.update();
        }

        displayManager.close();
    }

    public static void main(String[] args) {
        new MainGameLoop().start();
    }
}
