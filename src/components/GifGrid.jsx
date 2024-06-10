import React, { useEffect } from 'react'

const GifGrid = () => {
    const gifUrls = [
        "src/assets/A0_pattern_formation_A.gif",
        "src/assets/bulk_modulus0_acoustic_scattering_inclusions_2d_bulk_modulus.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_maze_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/pressure_re0-checkpoint_helmholtz_staircase_pressure_re_.ipynb_checkpoints.gif",
        "src/assets/density0-checkpoint_euler_quadrants_density_.ipynb_checkpoints.gif",
        "src/assets/energy0_euler_quadrants_energy.gif",
        "src/assets/energy0-checkpoint_euler_quadrants_energy_.ipynb_checkpoints.gif",
        "src/assets/height0_planetswe_height.gif",
        "src/assets/height0-checkpoint_planetswe_height_.ipynb_checkpoints.gif",
        "src/assets/pressure_im0_helmholtz_staircase_pressure_im.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_inclusions_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/pressure0_acoustic_scattering_discontinuous_2d_pressure.gif",
        "src/assets/pressure0_acoustic_scattering_maze_2d_pressure.gif",
        "src/assets/pressure0_euler_quadrants_pressure.gif",
        "src/assets/pressure0_rayleigh_benard_pressure.gif",
        "src/assets/pressure0_shear_flow_pressure.gif",
        "src/assets/pressure0_turbulent_radiative_layer_2D_pressure.gif",
        "src/assets/pressure0_viscoelastic_instability_pressure.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_discontinuous_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_inclusions_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_maze_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/A0_pattern_formation_A.gif",
        "src/assets/bulk_modulus0_acoustic_scattering_inclusions_2d_bulk_modulus.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_maze_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/pressure_re0-checkpoint_helmholtz_staircase_pressure_re_.ipynb_checkpoints.gif",
        "src/assets/density0-checkpoint_euler_quadrants_density_.ipynb_checkpoints.gif",
        "src/assets/energy0_euler_quadrants_energy.gif",
        "src/assets/energy0-checkpoint_euler_quadrants_energy_.ipynb_checkpoints.gif",
        "src/assets/A0_pattern_formation_A.gif",
        "src/assets/bulk_modulus0_acoustic_scattering_inclusions_2d_bulk_modulus.gif",
        "src/assets/pressure0-checkpoint_acoustic_scattering_maze_2d_pressure_.ipynb_checkpoints.gif",
        "src/assets/pressure_re0-checkpoint_helmholtz_staircase_pressure_re_.ipynb_checkpoints.gif",
        "src/assets/density0-checkpoint_euler_quadrants_density_.ipynb_checkpoints.gif",
        "src/assets/energy0_euler_quadrants_energy.gif",
    ]

    useEffect(() => {
        const calculateNumCols = () => {
            const containerWidth = window.innerWidth
            const newNumCols = Math.floor(containerWidth / 180)
            return newNumCols <= 2 ? 3 : newNumCols
        }

        const handleResize = () => {
            const newNumCols = calculateNumCols()
            const grid = document.querySelector('.gif-grid')
            if (grid) {
                grid.style.gridTemplateColumns = `repeat(${newNumCols}, minmax(0, 1fr))`
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="gif-grid mt-20 grid gap-0 overflow-hidden">
            {gifUrls.map((url, index) => (
                <div key={index} className="gif-item w-60 h-60 flex justify-center items-center">
                    <img src={url} alt={`GIF ${index}`} className="gif-image h-auto max-w-full" />
                </div>
            ))}
        </div>
    )
}

export default GifGrid
