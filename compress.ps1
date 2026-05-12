Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param([string]$path, [string]$out, [int]$width)
    $img = [System.Drawing.Image]::FromFile($path)
    $ratio = $width / $img.Width
    if ($ratio -ge 1) {
        $img.Save($out, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    } else {
        $newHeight = [int]($img.Height * $ratio)
        $bmp = New-Object System.Drawing.Bitmap($width, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        
        # Opciones para mejor calidad
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $graph.DrawImage($img, 0, 0, $width, $newHeight)
        $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmp.Dispose()
        $graph.Dispose()
    }
    $img.Dispose()
}

$dir = "c:\Users\USUARIO\Downloads\EscalabApp\public"
Resize-Image "$dir\group-business-executives-discussing-digital-tablet.jpg" "$dir\opt-card1.jpg" 600
Resize-Image "$dir\friends-using-digital-tablet-bar.jpg" "$dir\opt-card2.jpg" 600
Resize-Image "$dir\group-happy-freelance-workers-talking-having-fun-lunch-break-office.jpg" "$dir\opt-card3.jpg" 600

Write-Host "Compresión finalizada."
